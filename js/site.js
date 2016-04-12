var changeProject = function(e) {
  var data = e.currentTarget.dataset.key

  var selectedList = $(e.currentTarget)
  var selectedItem
  items.each(function (idx, el) {
    if (el.dataset.key === data) { selectedItem = $(el); }
  })

  list.removeClass('list-selected')
  items.addClass('hidden')

  selectedList.addClass('list-selected')
  selectedItem.removeClass('hidden')
}

var showHideBio = function(e) {
  var state = e.currentTarget.dataset.key
  var el = $('#bio')
  var link = $(e.currentTarget)

  // Get data key.
  // If key === "expand", remove hidden class from h3, otherwise add it.

  if (state === "expand") {
    el.removeClass('hidden')
    link.attr('data-key', 'hide')
  } else {
    el.addClass('hidden')
    link.attr('data-key', 'expand')
  }
}

var list = $('.list li')
var items = $('.project-content > li')
var expander = $('#expand')

list.on('click', changeProject)
expander.on('click', showHideBio)
