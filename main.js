var  connect = require('connect')
   , auth= require('./lib')
   , url= require('url')
   , ejs= require('ejs')
   , fs= require('fs');

var fbId= "138391069632276";
var fbSecret= "662321b535c93082a88378ff4c468e60";
var fbCallbackAddress= "http://smalltalktutorial.herokuapp.com/auth/facebook_callback"


var specialPaths = {
    loginFailure: "/loginFailed"
  , accessDenied: "/accessDenied"
  , secret: "/secret"
  , login: "/login"
  , logout: "/logout"
  , justLoggedIn: "/justLoggedIn"
};

var authenticatedRoutes= {
      "/login": {authenticate: true }
    , "/justLoggedIn": {authenticate: true }
    , "/secret": {authenticate: false }
};

function redirect(req, res, location) {
  res.writeHead(303, { 'Location': location });
  res.end('');
}

function renderFile(res, filename, options) {
	res.end(ejs.render(fs.readFileSync(__dirname + '/templates/' + filename, 'utf8'), options));
}
// To demonstrate a middleware-type approach, provide an example one
var example_auth_middleware= function() {
  return function(req, res, next) {
    var urlp= url.parse(req.url, true)
    var path= urlp.pathname;
    if( path ==  specialPaths.logout ) {
      req.logout(function() {
        next();
      });
    }
    else {
      if( authenticatedRoutes[path] ) {
        if( authenticatedRoutes[path].authenticate && authenticatedRoutes[path].authenticate === true ) {
          req.authenticate( function(error, authenticated){
            if( authenticated === true ) next();
            else if( authenticated === false ) redirect( req, res, specialPaths.loginFailure );
          });
        } else {
          if( req.isAuthenticated() ) next();
          else redirect( req, res, specialPaths.accessDenied );
        }
      } else next();
    }
  }
};

var users= {};

// Utilise the 'events' to do something on first load (test whether the user exists etc. etc. ) 
function firstLoginHandler( authContext, executionResult, callback ) {

  // The originally request URL will be stored in : executionResult.originalUrl 
  // this could be used for redirection in 'real' cases.
  if( users[executionResult.user.id] ) {
    //console.log('Known USER: ' + executionResult.user.id);
    redirect( authContext.request, authContext.response, "/");
  } else {
    // So here one would probably 'register' the user in the local system.
    //console.log('Brand new USER: ' + executionResult.user.id);
    users[executionResult.user.id]= true;
    redirect( authContext.request, authContext.response, specialPaths.justLoggedIn );
  }
}

// Define our pages
// a 'Home page' 
// a 'Failed login page'
// a 'Logout page'
// a 'Secrets page' (requires authentication (but won't attempt to authenticate) )
function routes(app) {
  app.get(specialPaths.secret, function(req, res, params) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	renderFile(res, 'pedo.ejs', {
		fbid: req.getAuthDetails().user.id
	});
  });
  app.get(specialPaths.accessDenied, function(req, res, params) {
    res.writeHead(403, {'Content-Type': 'text/html'})
    res.end("Acces denied.")
  });
  app.get(specialPaths.login, function(req, res, params) {
    redirect( req, res, "/" );
  }); 
  app.get(specialPaths.loginFailure, function(req, res, params) {
    res.end("<html><body>Authentication error, please <a href='/login'>try again</a>.</body></html>")
  }); 
  app.get(specialPaths.justLoggedIn, function(req, res, params) {
    //console.log("Es realmente puto el que lee? Muchas gracias. AH SE REGISTRO UN FLACO")
    redirect( req, res, "/" );
  }); 

  app.get(/.*/, function(req, res, params) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if( req.isAuthenticated() ) {
	  det = req.getAuthDetails();
      res.end("<html><body>Hola, " + det.user.first_name + "!<br><img src='http://graph.facebook.com/"+ det.user.id +"/picture'><br>Tus auth details: <p>"+ JSON.stringify(det) + "</p><a href='/logout'>Logout</a><br /> <a href='/secret'>Shhh! Secrets</a></body></html>")
    }
    else {
      res.end("<html><body>Please <a href='/login'>Login</a> <br /> <a href='/secret'>Shhh! Secrets</a></body></html>")
    }
  })
}

var server= connect.createServer(connect.cookieParser()
                               , connect.session({secret: 'ajiozkaEsUnNombreMagico', store: new connect.session.MemoryStore({ reapInterval: -1 }) })
                               , auth( {  strategies: auth.Facebook({appId : fbId, appSecret: fbSecret, scope: "", callback: fbCallbackAddress})
                                        , trace: true
                                        , firstLoginHandler: firstLoginHandler } )
                               , example_auth_middleware()
							   , connect.static('js')
							   , connect.static('projects')
                               , connect.router(routes));
server.listen(process.env.PORT);

/*
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(process.env.PORT);
*/