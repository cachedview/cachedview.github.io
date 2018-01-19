const root_site = "http://webcache.googleusercontent.com/search?q=cache:"
var site;
var keycode;
var background;
$(document).keyup(function(evt) {
  keycode = (evt.keyCode ? evt.keyCode : evt.which);
  if (!$("input").is(":focus")) {
  if (keycode == '87') { // W
    site = root_site + $("#user_input").val()
    window.open(site);
  }
  if (keycode == '85') { // W
    $("#download_link").attr("href", $("#user_input").val());
    $("#download_link").css("visibility", "visible");
  }
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
