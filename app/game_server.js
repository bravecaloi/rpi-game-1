"use strict";

var game = {

  startServer: function(){

    /** Module dependencies */
    var http        = require('http')
      , path        = require('path')
      , express     = require('express')
      , controller  = require(path.join(process.cwd(), 'app/controller', 'piano.js'))
      , app         = express()
    ;

    var options = { host: 'localhost', port: 2323 };

    // all environments
    app.set('port', process.env.PORT || 2323);
    app.set('views', process.cwd() + '/views');
    app.set('view engine', 'ejs');
    app.use(require('stylus').middleware(path.join(process.cwd(), 'public')));
    app.use(express.static(path.join(process.cwd(), 'public')));


    //***** LINK CONTROLLER WITH ROUTES ***************

    app.get('/touched/:number', controller.touched);

    //**************************************************



    var DELAY_FOR_START = 4000;

    http.createServer(app).listen(app.get('port'), function(err){
      console.log('server created');

      setTimeout(function(){
          window.document.getElementById('message').innerHTML = "Serever ready!";
      }, DELAY_FOR_START);

    });
  }
};
