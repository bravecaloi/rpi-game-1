
$( document ).ready(function(){
  drawDots();
});


function drawDots(){
  var container = $('#dots_container');

  global.column = Math.floor(($(document).height() / 124));
  global.line = Math.floor(($(document).width() / 124));

  global.totalDots = global.line * global.column;

  for (var i = 0; i < global.totalDots; i++) {
      var dot = document.createElement('div');
      dot.id = "dot_" + i;
      dot.className = 'dot';
      // dot.style.borderColor = "#fff";
      // dot.style.backgroundColor = getRandomColor();
      // dot.style.opacity = 0.2;
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
