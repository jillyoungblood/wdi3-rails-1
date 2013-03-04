$(function(){

  $('#new_priority').click(show_new_form);
  $('#cancel_priority').click(hide_form);
  $('#create_priority').click(create_priority);
  $('#priorities').on('click', '.color', edit_priority);

  add_color_boxes();
  init_minicolors();

});

// Global Variables
// *********************************** //
var priorities = [];

// *********************************** //

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

function edit_priority()
{
  show_edit_form();

  var color = $(this).css('background-color');
  color = rgb2hex(color);
  $('input.minicolors').minicolors('value', color);
  var name = $(this).next();
  name = name.text();
  $('#name').val(name);
  var value = $(this).next().next().text();
  $('#value').val(value);
  var priority_id = $(this).next().next().next().text();
  $('#priority_id').val(priority_id);
}

function create_priority()
{
  var value = $('#value').val();
  var name = $('#name').val();
  var color = $('input.minicolors').minicolors('value');
  var token = $('input[name=authenticity_token]').val();

  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/priorities",
      data: {authenticity_token:token, color:color, name:name, value:value}
    }).done(process_priority);

  return false;
}

// function edit_abc_priority()
// {
//   var value = $('#value').val();
//   var name = $('#name').val();
//   var color = $('input.minicolors').minicolors('value');
//   var token = $('input[name=authenticity_token]').val();
//   var priority_id = $('#priority_id').val();

//   $.ajax({
//       dataType: 'json',
//       type: "post",
//       url: "/priorities",
//       data: {id:priority_id, authenticity_token:token, color:color, name:name, value:value}
//     }).done(process_priority);

//   return false;
// }

function process_priority(priority)
{
  add_priority_to_array(priority);
  $('ul#priorities').empty();
  _.each(priorities, display_priority);
}

function display_priority(priority)
{
  var li = $('<li>');
  var div1 = $('<div>');
  var div2 = $('<div>');
  var div3 = $('<div>');
  var div4 = $('<div>');
  var div5 = $('<div>');

  div1.addClass('priority').addClass('color');
  div2.addClass('priority');
  div3.addClass('priority').addClass('hide');
  div4.addClass('priority').addClass('hide');
  div5.addClass('clear');

  div1.css('background-color', priority.color);
  div2.text(priority.name);
  div3.text(priority.value);
  div4.text(priority.id);

  li.append([div1, div2, div3, div4, div5]);
  $('#priorities').append(li);

  hide_form();
}

function add_priority_to_array(priority)
{
  priorities.push(priority);
  priorities = _.sortBy(priorities, function(p){ return p.value; }).reverse();
}

function hide_form()
{
  $('#new_priority').show();
  $('.form').hide();
}

function show_new_form()
{
  $('#new_priority').hide();
  $('.form').show();
  $('#create_priority').show();
  $('#edit_priority').hide();
  $('#name').val('');
  $('#value').val('')
  $('input.minicolors').minicolors('value', '#ffffff');
  $('#name').focus();
}

function show_edit_form()
{
  $('#new_priority').hide();
  $('.form').show();
  $('#create_priority').hide();
  $('#edit_priority').show();
  $('#name').focus();
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

function rgb2hex(rgb)
{
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}
