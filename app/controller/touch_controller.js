AVAILABLE_NOTES = 12;


exports.touched = function(req, res) {
  var num = req.params.number;

  if (num < AVAILABLE_NOTES) {

    // Bubbles
    var msg = global.$('#key_' + num);
    msg.show();

    setTimeout(function(){
      msg.hide();
    }, 3500);
  }

  res.send('OK');
};
