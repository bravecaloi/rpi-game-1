AVAILABLE_NOTES = 12;


exports.touched = function(req, res) {
  res.send('OK');

  var keyPressed = req.params.number;

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
};

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
