$(document).ready(function(){
  $('.div-quote').hide();
  $('.div-user-quote').hide();
  $('.back-button').hide();
  var url;

  $('#back').on('click',function(e){
    $('.div-quote').hide();
    $('.div-user-quote').hide();
    $('.back-button').hide();
    $('.choice').fadeIn();
  });

  $('#choose-comp').on('click',function(e){
    url = 'http://' + window.location.hostname + ':3000/api';
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
    $('.choice').hide();
    $('.div-quote').fadeIn();
    $('.back-button').fadeIn();
  });

  $('#choose-user').on('click', function(e){
    url = 'http://' + window.location.hostname + ':9000/api/quotes/random';
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
      $('#user-content').html(response.content);
      $('#user-author').html(response.author);
    });

    $('.choice').hide();
    $('.div-user-quote').fadeIn();
    $('.back-button').fadeIn();
  });

  $('.quote-divs').on('click', 'button#quote-refresh',function(e){
    url = 'http://' + window.location.hostname + ':3000/api';
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

  $('.quote-divs').on('click', 'button#quote-user-refresh',function(e){
    url = 'http://' + window.location.hostname + ':9000/api/quotes/random';
    $.ajax({
      xhrFields: {
          withCredentials: true
      },
      contentType: 'application/json',
      dataType: 'json',
      crossDomain: true,
      method: 'Get',
      url: url,
      success: function(response){
        $('#user-content').html(response.content);
        $('#user-author').html(response.author);
      },
      error: function(err){
        console.log(err)
      }
    });
  });

  $('.quote-divs').on('click','input#submit', function(e){
    e.preventDefault();
    url = 'http://' + window.location.hostname + ':9000/api/quotes';
    var content = $('input#user-content').val();
    var author = $('input#user-author').val();
    var data = {content: content, author: author}

    $.ajax({
      data: data,
      crossDomain: true,
      method: 'Post',
      url: url,
      success: function(response){
        console.log('Successfully Generated')
        $('input#user-content').val('');
        $('input#user-author').val('');
        $('input#submit').removeClass('error-color');
      },
      error: function(err){
        console.log("error!");
        $('input#user-content').val('');
        $('input#user-author').val('');
        $('input#submit').addClass('error-color');
      }
    })

  });

});
