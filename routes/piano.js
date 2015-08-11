AVAILABLE_NOTES = 7;

exports.initPiano = function(req, res) {
  global.audio_type = 'audio/DaDeMo_-_Grand_Piano_Fazioli_Major_Chords_Low_Key/';

  var audios = [];

  for (var num = 1; num < AVAILABLE_NOTES + 1; num++) {
    audios[num] = { "curr": 0, "sounds": [] };

    // up to n fast key strokes
    for (var i = 0; i < 50; i++) {
      audios[num].sounds.push(new global.window.Audio(global.audio_type + "" + num + ".wav"));
    }

  }

  global.audios = audios;
}

exports.touched = function(req, res) {
  var num = req.params.number;

  if (num <= AVAILABLE_NOTES) {
    var key = global.audios[num];

    key.sounds[key.curr].pause();
    key.sounds[key.curr].play();
    key.curr = ++key.curr % key.sounds.length;

  } else {
    global.$('#message').text("touched " + num);
  }

  res.json({ "status": 200, "response": "OK" });
};
