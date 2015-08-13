AVAILABLE_NOTES = 12;

exports.touched = function(req, res) {
  res.send('OK');

  var num = req.params.number;
  if (num < AVAILABLE_NOTES) {

    var msg = global.$('#message');
    msg.text("touched " + num);
    msg.addClass('animated bounceInLeft');

    setTimeout(function(){
      msg.removeClass('animated bounceInLeft');
    }, 500);

  }
};
