// var btn = document.getElementById('translate');
var request = new XMLHttpRequest();

$(function(){
  var $txtArea = $('#textArea'),
      $result = $('#result'),
      $translate = $('#translate');


$translate.on('click', function(){
$.ajax({
  url: "https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.",
  type: 'GET',
  data: {
    sentence: $txtArea.val()
  },
dataType: 'json',
beforeSend: function(xhr){
  xhr.setRequestHeader (
    'X-Mashape-Key: 5YLQrzUFnSmshxGAypr5wO73X8Uzp1BoNthjsnXFYT8XutFo0x');

  }



}).done(function(data){
  $txtArea.text(data);
})
.fail(function(request, textStatus, errorThrown){
  $txtArea.html('Error:' +  request.status + '' + textStatus + '' + errorThrown);
  });
});
});
