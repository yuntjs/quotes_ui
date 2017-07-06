$(document).ready(function(){
  var url = 'http://192.168.99.201:3000/api'
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
