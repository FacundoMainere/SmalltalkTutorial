var	  connect = require('connect')
	, auth= require('connect-auth')
	, url= require('url')
	, ejs= require('ejs')
	, fs= require('fs')
	, mysql= require('mysql');

var sqlconn = mysql.createConnection({
  host     : 'us-cdbr-east.cleardb.com',
  user     : 'be9c143f242393',
  password : '21ac9130',
  database : 'heroku_205f67b308148bb',
});

var fbId= "138391069632276";
var fbSecret= "662321b535c93082a88378ff4c468e60";
var fbCallbackAddress= "http://smalltalktutorial.herokuapp.com/auth/facebook_callback";

var twitterConsumerKey="TAatled5jg5qjhE51QHFg";
var twitterConsumerSecret="bfEWQX2v7DyN0j6BG49XQDTlwdOQ67HToofGR6w7js";
var twitterCallbackAddress= "http://smalltalktutorial.herokuapp.com/auth/twitter_callback";

var google2Id="268287627284.apps.googleusercontent.com";
var google2Secret="1kNtqmML8hFT4Kuul3Bnxty2";
var google2CallbackAddress="http://smalltalktutorial.herokuapp.com/oauth2callback";

function redirect(req, res, location) {
  res.writeHead(303, { 'Location': location });
  res.end('');
}

function renderFile(filename, options) {
	return ejs.render(fs.readFileSync(__dirname + '/templates/' + filename, 'utf8'), options);
}

function renderWrapped(res, filename, options) {
	res.write(renderFile('header.html', options) + renderFile(filename, options) + renderFile('footer.html'));
	res.end('');
}

var smalltalk_tutorial_middleware = function() {
	return function (req, res, next) {
		var urlp = url.parse(req.url, true);
		var path = urlp.pathname;
		if (path == "/logout") {
			req.logout(function() {
				next();
			});
		} else if (path == "/login" && urlp.query.using) {
			req.authenticate([urlp.query.using], function (error, authenticated){
				if (error) { 	
					res.end("ERROR!! AAAAAAAAA!!11oneone"); 
				} else {
				if( authenticated === undefined ) { }
				else next();
				}
			});	
		} else next();
	}
};

function firstLoginHandler( authContext, executionResult, callback ) {

	var ret=0;
	var ext_id=0;
	var ext_type=0;
	isTwitter = ( executionResult.currentStrategy == "twitter" );
	isGoogle = ( executionResult.currentStrategy == "google2" );
	isFacebook = ( executionResult.currentStrategy == "facebook" );
	
	if (isGoogle || isFacebook) ext_id = executionResult.user.id;
	if (isTwitter) ext_id = executionResult.user.user_id;
	
	if (isFacebook) ext_type = 1;
	if (isTwitter)  ext_type = 2;
	if (isGoogle)   ext_type = 3;
	
	
	sql = 'select count(ext_id) as c from usersocial where ext_id = ' + sqlconn.escape(ext_id) + ' and ext_type = ' + sqlconn.escape(ext_type);
	console.log(sql);
	sqlconn.query(sql,
	function(err, a, b) {
		console.log('a: '+JSON.stringify(a));
		ret=parseInt(a[0].c);
		console.log(JSON.stringify(ret));
	});
	
	if(  ret == 0 ) { 
		console.log('insertando');
		sqlconn.query('insert into usersocial (ext_type, ext_id) values(' + sqlconn.escape(ext_type) + ', ' + sqlconn.escape(ext_id) + ')');
	}else{console.log('ya taba adentro');}
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
			isTwitter = ( typeof det.twitter_oauth_token != "undefined");
			isGoogle = ( (typeof det.user != "undefined") && (typeof det.user.link != "undefined") && (det.user.link.indexOf("google") != -1));
			isFacebook = ( (typeof det.user != "undefined") && (typeof det.user.link != "undefined") && (det.user.link.indexOf("facebook") != -1));
			var uimg="";
			var uname="";
			if (isTwitter) {
				uimg = "https://api.twitter.com/1/users/profile_image?screen_name=" + det.user.username + "&size=normal";
				uname = det.user.username;
			}
			else if (isFacebook) {
				uimg = "http://graph.facebook.com/"+ det.user.id + "/picture";
				uname = det.user.name;
			}
			else if (isGoogle) {
				uimg = det.user.picture;
				uname = det.user.name;
			}
			
			renderWrapped(res, 'home.html', {
				  lesson_number: 1
				, user: {name: uname, imgsrc: uimg}
				, debug: (JSON.stringify(det))
			});
		} else {
			renderWrapped(res, 'home-noauth.html');
		}
	});
	
	app.get(/.*/, function(req, res, params) {
		redirect(req, res, "/");
	});
}

var app = connect.createServer(
	  connect.staticCache()
	, connect.static(__dirname + '/public', { maxAge: 2419200000})
	, connect.cookieParser()
	, connect.session({secret: 'ajiozkaEsUnNombreMagico', store: new connect.session.MemoryStore({ reapInterval: -1 }) })
	, auth( {  strategies: [
				  auth.Facebook({appId : fbId, appSecret: fbSecret, scope: "", callback: fbCallbackAddress})
				, auth.Twitter({consumerKey: twitterConsumerKey, consumerSecret: twitterConsumerSecret, callback: twitterCallbackAddress})
				, auth.Google2({appId : google2Id, appSecret: google2Secret, callback: google2CallbackAddress})]
			, trace: true
			, firstLoginHandler: firstLoginHandler } )
	, smalltalk_tutorial_middleware()
	, connect.router(routes)
).listen(process.env.PORT);
//JUAS
