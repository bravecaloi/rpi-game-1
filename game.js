"use strict";

var game = {

  startServer: function(){

    /**
     * Module dependencies.
     */
    var http = require('http')
      , path = require('path')
      , express = require('express')
      // , routes = require(path.join(process.cwd(), 'routes', 'index.js'))
      , app = express()
    ;

    var options = {
      host: 'localhost',
      port: 2323
    };

    //check if server is already running
    http.get(options, function(res) {
      console.log('server is running, redirecting to localhost');
      if (window.location.href.indexOf('localhost') < 0) {
        window.location = 'http://localhost:' + app.get('port');
      }
    }).on('error', function(e) {
      //server is not yet running

      // all environments
      app.set('port', process.env.PORT || 2323);
      app.set('views', process.cwd() + '/views');
      app.set('view engine', 'ejs');
      app.use(require('stylus').middleware(path.join(process.cwd(), 'public')));
      app.use(express.static(path.join(process.cwd(), 'public')));

      /////////////////////////// ROUTES //////////////////////////////
      app.get('/touched/:number', function(req, res){
        global.$('#message').text("touched " + req.params.number)
        // window.document.getElementById('message').innerHTML = ;

        res.json({"status": 200, "response": "OK"});
      });

      app.get('/released/:number', function(req, res){
        window.document.getElementById('message').innerHTML = "released " + req.params.number;
        res.json({"status": 200, "response": "OK"});
      });
      /////////////////////////////////////////////////////////////////


      http.createServer(app).listen(app.get('port'), function(err){
        console.log('server created');
        window.document.getElementById('message').innerHTML = "Serever ready!";
      });
    });

  }

};
