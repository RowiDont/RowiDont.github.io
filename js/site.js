function changeProject(e) {
  var data = e.currentTarget.dataset.key;

  var selectedList = $(e.currentTarget);
  var selectedItem;
  items.each(function (idx, el) {
    if (el.dataset.key === data) { selectedItem = $(el); }
  });

  list.removeClass('list-selected');
  items.addClass('hidden');

  selectedList.addClass('list-selected');
  selectedItem.removeClass('hidden');
}

var list = $('.list li');
var items = $('.project-content > li');

list.on('click', changeProject);

console.log("A clean console is indicative of clean code.");
console.log("I like writing clean code.");
console.log("If that's important to you too, please reach out at rafiepatel@gmail.com"); 
