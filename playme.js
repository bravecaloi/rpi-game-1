    var play = require('play');

    var file = './audio/piano2/0.wav';

    // play with a callback
    play.sound(file, function(){
      // these are all "fire and forget", no callback
      console.log('done');
    });

    setTimeout(function(){play.sound(file);}, 500);
    setTimeout(function(){play.sound(file);}, 1000);
    setTimeout(function(){play.sound(file);}, 1500);
