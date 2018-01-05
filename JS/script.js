const root_site = "http://webcache.googleusercontent.com/search?q=cache:"
var site;
var keycode;
var background;
$(document).keyup(function(evt) {
  keycode = (evt.keyCode ? evt.keyCode : evt.which);
  if (keycode == '13') { // Enter
    site = root_site + $("#user_input").val()
    window.open(site);
  }
  if (!$("input").is(":focus")) {
  if (keycode == '67') { // C
    background = prompt("Change Background Color", "Enter RGB value, html color, or hex value");
    $("body").css("background-color", background);
  }
  if (keycode == '73') { // I
    background = prompt("Change Input Background Color", "Enter RGB value, html color, or hex value");
    $("input").css("background-color", background);
  }
  }
});
