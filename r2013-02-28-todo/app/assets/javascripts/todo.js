var map;

$(function(){

  $('#new_priority').click(show_new_priority_form);
  $('#cancel_priority').click(hide_priority_form);
  $('#create_priority').click(create_priority);
  $('#update_priority').click(update_priority);

  $('#new_task').click(show_new_task_form);
  $('#cancel_task').click(hide_task_form);
  $('#create_task').click(create_task);
  $('#update_task').click(update_task);

  $('#priorities').on('click', '.color', edit_priority);
  $('#priorities').on('click', '.up', up_priority);
  $('#priorities').on('click', '.down', down_priority);

  add_color_boxes();
  init_minicolors();

});
