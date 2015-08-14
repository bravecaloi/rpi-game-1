AVAILABLE_NOTES = 12;


exports.touched = function(req, res) {
  res.send('OK');

  var num = req.params.number;

  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * global.totalDots);
    var anim = Math.floor(Math.random() * 4);

    var dot = global.window.document.getElementById('dot_' + num);
    dot.style.opacity = 1;
    dot.style['-webkit-animation-name'] ='r' + anim;
  }
};
