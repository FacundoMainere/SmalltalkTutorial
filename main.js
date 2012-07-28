var  express= require('express')
	, connect = require('connect')
	,auth= require('connect-auth')
	, url= require('url')
	, ejs= require('ejs')
	, fs= require('fs');

var fbId= "138391069632276";
var fbSecret= "662321b535c93082a88378ff4c468e60";
var fbCallbackAddress= "http://smalltalktutorial.herokuapp.com/auth/facebook_callback";

var twitterConsumerKey="TAatled5jg5qjhE51QHFg";
var twitterConsumerSecret="bfEWQX2v7DyN0j6BG49XQDTlwdOQ67HToofGR6w7js";
var twitterCallbackAddress= "http://smalltalktutorial.herokuapp.com/auth/twitter/callback";

var app = express.createServer();

app.configure(function(){
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'foobar' }));
  app.use(auth( [
   auth.Twitter({consumerKey: twitterConsumerKey, consumerSecret: twitterConsumerSecret})
  ]) );
});


app.get('/', function(req, res){
    res.send('Hello World <a href="/secrets">Secrets!</a>');
});

app.get('/secrets', protect, function(req, res){
    res.send('Shhhh!!! Unicorns');
});

function protect(req, res, next) {
  if( req.isAuthenticated() ) next();
  else {
    req.authenticate(function(error, authenticated) {
      if( error ) next(new Error("Problem authenticating"));
      else {
        if( authenticated === true)next();
        else if( authenticated === false ) next(new Error("Access Denied!"));
        else {
          // Abort processing, browser interaction was required (and has happened/is happening)
        }
      }
    })
  }
}

function redirect(req, res, location) {
  res.writeHead(303, { 'Location': location });
  res.end('');
}

function renderFile(filename, options) {
	return ejs.render(fs.readFileSync(__dirname + '/templates/' + filename, 'utf8'), options);
}

function renderWrapped(res, filename, options) {
	res.end(renderFile('header.html', options) + renderFile(filename, options) + renderFile('footer.html'));
}

var smalltalk_tutorial_middleware = function() {
	return function (req, res, next) {
		var path = url.parse(req.url, true).pathname;
		if (path == "/logout") {
			req.logout(function() {
				next();
			});
		} else if (path == "/login") {
			req.authenticate(function (error, authenticated){
				if( authenticated === true ) next();
				else if( authenticated === false ) redirect( req, res, "/fail" );
			});	
		} else next();
	}
};

var users= {};

function firstLoginHandler( authContext, executionResult, callback ) {
	if( ! users[executionResult.user.id] ) {  // ClearDB dis
		users[executionResult.user.id]= true;
	}
	redirect( authContext.request, authContext.response, "/");
}

function routes(app) {

	app.get("/fail", function(req, res, params) {
		res.end("<html><body>Authentication error, please <a href='/login'>try again</a>.</body></html>")
	}); 

	app.get("/", function(req, res, params) {
		res.writeHead(200, {'Content-Type': 'text/html'})
		if( req.isAuthenticated() ) {
			det = req.getAuthDetails();
			renderWrapped(res, 'home.html', {
				lesson_number: 1,
				user: det.user
			});
		} else {
			renderWrapped(res, 'home-noauth.html');
		}
	});
	
	app.get(/.*/, function(req, res, params) {
		redirect(req, res, "/");
	});
}

var app2 = connect.createServer(
	  connect.static(__dirname + '/public')
	, connect.cookieParser()
	, connect.session({secret: 'ajiozkaEsUnNombreMagico', store: new connect.session.MemoryStore({ reapInterval: -1 }) })
	, auth( {  strategies: [
				/*auth.Facebook({appId : fbId, appSecret: fbSecret, scope: "", callback: fbCallbackAddress})
				,*/ auth.Twitter({consumerKey: twitterConsumerKey, consumerSecret: twitterConsumerSecret, callback: twitterCallbackAddress})]
			, trace: true
			, firstLoginHandler: firstLoginHandler } )
	, smalltalk_tutorial_middleware()
	, connect.router(routes)
);

app2.listen(process.env.PORT);