AVAILABLE_NOTES = 12;


exports.touched = function(req, res) {
  res.send('OK');

  var keyPressed = req.params.number;

  if(keyPressed < 8){
    drawRandomStar();
  }else{
    changeEnvAudioVariable(keyPressed);
  }

};

var currentAudioEnv = 8;
AUDIO_LIBS = {};

// Define here the sounds path to use.
// WARNING: sound files' names have to be the same in all folders
// TODO DEFINE this directly on the python script?
AUDIO_LIBS['keyPressed_8']  = 'wav';
AUDIO_LIBS['keyPressed_9']  = 'wav';
AUDIO_LIBS['keyPressed_10'] = 'wav';
AUDIO_LIBS['keyPressed_11'] = 'wav';

function changeEnvAudioVariable(num){
  $('#keyPressed_' + currentAudioEnv).removeClass('selected');
  $('#keyPressed_' + num).addClass('selected');

  currentAudioEnv = num;

  process.env['GAME_AUDIO_ENV'] = AUDIO_LIBS['keyPressed_' + currentAudioEnv];
}


function drawRandomStar(){
  var dots = getRandomPositionShapeDots();
  for (var i = 0; i < dots.length; i++) {
    try {
      var dot = global.window.document.getElementById('dot_' + dots[i]);
      dot.style['-webkit-animation-name'] = 'r' + keyPressed;

      dot.addEventListener('webkitAnimationEnd', function(){
        this.style.webkitAnimationName = '';
      }, false);
    } catch (e) {
      // do nothing, but we should fix it
    }
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
