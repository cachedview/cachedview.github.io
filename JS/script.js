const root_site = "http://webcache.googleusercontent.com/search?q=cache:"
var site;
var keycode;
$(document).keyup(function(evt) {
  keycode = (evt.keyCode ? evt.keyCode : evt.which);
  if (keycode == '13') {
  site = root_site + $("#user_input").val()
  window.open(site);
}
});
