$(function(){

  $('#new_priority').click(show_form);
  $('#cancel_priority').click(hide_form);
  $('#create_priority').click(create_priority);

  add_color_boxes();
  init_minicolors();

});

function init_minicolors()
{
  var settings = {
    animationSpeed: 100,
    animationEasing: 'swing',
    change: null,
    changeDelay: 0,
    control: 'hue',
    defaultValue: '',
    hide: null,
    hideSpeed: 100,
    inline: false,
    letterCase: 'lowercase',
    opacity: false,
    position: 'default',
    show: null,
    showSpeed: 100,
    swatchPosition: 'left',
    textfield: false,
    theme: 'default'
};

  $('INPUT.minicolors').minicolors(settings);
}

function create_priority()
{
  return false;
}

function hide_form()
{
  $('#new_priority').show();
  $('.form').hide();
}

function show_form()
{
  $('#new_priority').hide();
  $('.form').show();
}

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
