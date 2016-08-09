$(function(){
  var $txtArea = $('#textArea'),
      $result = $('#result'),
      $translate = $('#translate');

$translate.on(click,function(){
$.ajax({
  url: "https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.",
  header: {
    'X-Mashape-Authorization': 'nZgDSr0gAmmshzoPQz4m5z5ZXYBOp1N0xYZjsngecDCeh70V8X',
    'Accept': 'text/plain'
  },

type: 'GET',
data: {
  sentence: $txtArea.val()
},

datatype: 'json',
}).done(function(data){
  $txtArea.text(data);
})
.fail(function(request, textStatus, errorThrown){
  $txtArea.text('Error:' +  request.status + '' + textStatus + '' + errorThrown);
  });
});
