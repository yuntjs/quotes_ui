$(document).ready(function(){
  var url = 'http://' + window.location.hostname + ':3000/api'
  $.ajax({
    xhrFields: {
        withCredentials: true
    },
    contentType: 'application/json',
    dataType: 'json',
    crossDomain: true,
    method: 'Get',
    url: url
  })
  .done(function(response){
    $('#content').html(response.content);
    $('#author').html(response.author);
  });
});
