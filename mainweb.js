var  connect = require('./node_modules/connect')
   , auth= require('./lib')
   , url= require('url');

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
    // So here one would probably load in the local user representation for this 'user'
    console.log('Known USER: ' + executionResult.user.id);
    redirect( authContext.request, authContext.response, "/" );
  } else {
    // So here one would probably 'register' the user in the local system.
    console.log('Brand new USER: ' + executionResult.user.id);
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
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("HERE BE UNICORNS... Special Secret unicorns.")
  });
  app.get(specialPaths.accessDenied, function(req, res, params) {
    res.writeHead(403, {'Content-Type': 'text/html'})
    res.end("Oh-No-You-Didn't! You are not authenticated, be-gone.")
  });
  app.get(specialPaths.login, function(req, res, params) {
    redirect( req, res, "/" );
  }); 
  app.get(specialPaths.loginFailure, function(req, res, params) {
    res.end("<html><body>Facebook no like you :( Please <a href='/login'>Try again!</a> </body></html>")
  }); 
  app.get(specialPaths.justLoggedIn, function(req, res, params) {
    console.log("Someone just logged in for the first time.. account management time? ")
    redirect( req, res, "/" );
  }); 

  app.get(/.*/, function(req, res, params) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if( req.isAuthenticated() ) {
      res.end("<html><body>Congratulations, you have logged on, like a good-un! <a href='/logout'>Logout</a><br /> <a href='/secret'>Shhh! Secrets</a></body></html>")
    }
    else {
      res.end("<html><body>Please <a href='/login'>Login</a> <br /> <a href='/secret'>Shhh! Secrets</a></body></html>")
    }
  })
}

var server= connect.createServer(connect.cookieParser()
                               , connect.session({secret: 'FlurbleGurgleBurgle', store: new connect.session.MemoryStore({ reapInterval: -1 }) })
                               , auth( {  strategies: auth.Facebook({appId : fbId, appSecret: fbSecret, scope: "email", callback: fbCallbackAddress})
                                        , trace: true
                                        , firstLoginHandler: firstLoginHandler } )
                               , example_auth_middleware()
                               , connect.router(routes));
server.listen(process.env.PORT);

/*
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(process.env.PORT);
*/