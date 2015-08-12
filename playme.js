var Sound = require('node-aplay');
var file = './audio/piano2/0.wav';

// fire and forget:
new Sound(file).play();

// with ability to pause/resume:
var music = new Sound(file);
music.play();

setTimeout(function () {
    music.pause(); // pause the music after five seconds
}, 1000);

setTimeout(function () {
    music.resume(); // and resume it two seconds after pausing
}, 3000);

// you can also listen for various callbacks:
music.on('complete', function () {
    console.log('Done with playback!');
});
