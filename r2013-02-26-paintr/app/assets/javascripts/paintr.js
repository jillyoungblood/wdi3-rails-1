$(function(){
  $('#add_color').click(add_color);
  $('#clear').click(clear);
  $('#colors').on('click', '.box', set_color);
  $('#canvas').on('mouseover', '.paint', paint_color);
  create_paint_boxes();
});

function paint_color()
{
  var color = $('#selected').css('background-color');
  var box = $(this);
  box.css('background-color', color);
}

function create_paint_boxes()
{
  for(var i = 0; i < 5000; i++)
  {
    var paint = $('<div>');
    paint.addClass('paint');
    $('#canvas').append(paint);
  }
}

function clear()
{
  $('#colors').empty();
  $('#selected').css('background-color', 'white');
}

function set_color()
{
  var box = $(this);
  $('#selected').css('background-color', box.css('background-color'));
}

function add_color()
{
  var color = $('#color').val();
  var box = $('<div>');
  box.addClass('box');
  box.css('background-color', color);
  $('#colors').prepend(box);
  $('#color').val('');
  $('#color').focus();
}
