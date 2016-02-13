function mouseOn (e) {
  var hiddenItem = e.currentTarget.children[0];
  $(hiddenItem).fadeIn('fast').toggleClass("hidden");
}

function mouseOff (e) {
  var hiddenItem = e.currentTarget.children[0];
  $(hiddenItem).fadeOut('fast').toggleClass("hidden");
}

$('.project-list li').hover(mouseOn, mouseOff);
