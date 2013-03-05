function show_new_task_form()
{
  $('#new_task').hide();
  $('.taskform').show();
  $('#create_task').show();
  $('#update_task').hide();
  $('#title').val('');
  $('#description').val('');
  var date = moment().format("MM/DD/YYYY");
  $('#duedate').val(date);
  $('#address').val('');
  $('#is_complete').removeAttr('checked');
  $('#title').focus();
}

function hide_task_form()
{
  $('#new_task').show();
  $('.taskform').hide();
}

function create_task()
{
  var priority_id = $('#priority_id').val();
  var title = $('#title').val();
  var description = $('#description').val();
  var duedate = $('#duedate').val();
  var is_complete = $('#is_complete').is(':checked');
  var address = $('#address').val();
  var token = $('input[name=authenticity_token]').val();

  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/tasks",
      data: {authenticity_token:token, 'task[priority_id]':priority_id, 'task[title]':title, 'task[description]':description, 'task[duedate]':duedate, 'task[is_complete]':is_complete, 'task[address]':address}
    }).done(process_task);

  return false;
}

function update_task()
{
}

function process_task(task_list)
{
  _.each(task_list, display_task);
}

function display_task(task)
{
  add_marker(task.latitude, task.longitude, task.title);

  var li = $('<li>');
  li.text(task.title);
  $('#tasks').append(li);

  hide_task_form();
}
