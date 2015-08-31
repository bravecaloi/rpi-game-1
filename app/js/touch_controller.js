AVAILABLE_NOTES = 12;


exports.touched = function(req, res) {
  res.send('OK');

  var keyPressed = req.params.number;

  if(keyPressed < 8){
    drawRandomStar(keyPressed);
  }else{
    changeEnvAudioVariable(keyPressed);
  }

};

var currentAudioEnv = 8;
AUDIO_LIBS = {};

// Define here the sounds path to use.
AUDIO_LIBS['keyPressed_8']  = 'SOUND_MAPPING_0';
AUDIO_LIBS['keyPressed_9']  = 'SOUND_MAPPING_1';
AUDIO_LIBS['keyPressed_10'] = 'SOUND_MAPPING_2';
AUDIO_LIBS['keyPressed_11'] = 'SOUND_MAPPING_3';

function changeEnvAudioVariable(num){
  $('#keyPressed_' + currentAudioEnv).removeClass('selected');
  $('#keyPressed_' + num).addClass('selected');

  currentAudioEnv = num;

  process.env['GAME_AUDIO_ENV'] = AUDIO_LIBS['keyPressed_' + currentAudioEnv];
}


function drawRandomStar(keyPressed){
  var dots = getRandomPositionShapeDots();
  for (var i = 0; i < dots.length; i++) {
    var dot = global.window.document.getElementById('dot_' + dots[i]);
    dot.style['-webkit-animation-name'] = 'r' + keyPressed;

    dot.addEventListener('webkitAnimationEnd', function(){
      this.style.webkitAnimationName = '';
    }, false);
  }
}

function getRandomPositionShapeDots(){
  var dots = [];
  var pivot = Math.floor(Math.random() * global.totalDots);

  // Forms a diagonal square including the center point
  dots.push(pivot);
  dots.push(checkLimits(pivot + global.line));
  dots.push(checkLimits(pivot + global.line - 1));
  dots.push(checkLimits(pivot + global.line + 1));
  dots.push(checkLimits(pivot + (global.line * 2)));

  return dots;
}

function checkLimits(num){
  if(num < 0){
    return global.totalDots + num;
  }

  if(num >=  global.totalDots){
    return num - global.totalDots;
  }

  return num;
}
