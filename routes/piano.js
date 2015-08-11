AVAILABLE_NOTES = 12;

exports.initPiano = function() {
  global.audio_type = 'audio/piano2/';

  var audios = [];

  for (var num = 0; num < AVAILABLE_NOTES; num++) {
    audios[num] = { "curr": 0, "sounds": [] };

    // fast key strokes
    for (var i = 0; i < 1; i++) {
      audios[num].sounds.push(new global.window.Audio(global.audio_type + "" + num + ".wav"));
    }

  }

  global.audios = audios;
}

exports.touched = function(req, res) {
  var num = req.params.number;

  if (num < AVAILABLE_NOTES) {
    var key = global.audios[num];

    key.sounds[key.curr].pause();
    key.sounds[key.curr].play();
    key.curr = ++key.curr % key.sounds.length;

    var key = undefined;

    global.$('#message').text("touched " + num);
  }

  res.send('OK');
};
