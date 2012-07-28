var  connect = require('connect')
   , auth= require('./lib')
   , url= require('url')
   , ejs= require('ejs')
   , fs= require('fs');

var fbId= "138391069632276";
var fbSecret= "662321b535c93082a88378ff4c468e60";
var fbCallbackAddress= "http://smalltalktutorial.herokuapp.com/auth/facebook_callback"

function redirect(req, res, location) {
  res.writeHead(303, { 'Location': location });
  res.end('');
}

function renderFile(filename, options) {
	return ejs.render(fs.readFileSync(__dirname + '/templates/' + filename, 'utf8'), options);
}

function renderWrapped(res, filename, options) {
	res.end(renderFile('header.html') + renderFile(filename, options) + renderFile('footer.html'));
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
		redirect(res, req, "/");
	});
}

connect.createServer(
	  connect.static(__dirname + '/public')
	, connect.cookieParser()
	, connect.session({secret: 'ajiozkaEsUnNombreMagico', store: new connect.session.MemoryStore({ reapInterval: -1 }) })
	, auth( {  strategies: auth.Facebook({appId : fbId, appSecret: fbSecret, scope: "", callback: fbCallbackAddress})
			, trace: true
			, firstLoginHandler: firstLoginHandler } )
	, smalltalk_tutorial_middleware()
	, connect.router(routes)
).listen(process.env.PORT);