$(function(){

  add_color_boxes();

});

function add_color_boxes()
{
  $('.color').each(change_text_to_color);
}

function change_text_to_color(index, element)
{
  var box = $(element);
  var color = box.text();

  box.removeClass('hide');
  box.css('background-color', color);
  box.text('');
}
