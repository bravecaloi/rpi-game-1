
$( document ).ready(function(){
  drawDots();
});


function drawDots(){
  var container = $('#dots_container');

  var h = $(document).height();
  var w = $(document).width();

  global.totalDots = ((h * w) / (45 * 45));

  for (var i = 0; i < global.totalDots; i++) {
      var dot = document.createElement('div');
      dot.id = "dot_" + i;
      dot.className = 'dot';
      dot.style.borderColor = getRandomColor();
      dot.style.backgroundColor = getRandomColor();
      dot.style.opacity = 0.2;
      container.append(dot);
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
