$(function(){

  $('#flickr').click(search_flickr);
  $('#clear').click(clear_photos);

});

function search_flickr()
{
  var page = 1;
  var search = $('#search').val();
  $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c6e1f137bbeb666a1c0a884b609e286&text=' + search + '&per_page=500&page=' + page + '&format=json&jsoncallback=?', results);
}

function results(data)
{
  _.each(data.photos.photo, display_photo);
}

function display_photo(photo)
{
  var url = "url(http://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg)";
  var image = $('<div>');
  image.addClass('image');
  image.css('background-image', url);
  $('#images').prepend(image);
}

function clear_photos()
{
  $('#images').empty();
}
