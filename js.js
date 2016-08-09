// var btn = document.getElementById('request');
// var bio = document.getElementById('bio');
// var einstein_url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt";
//
// var request = new XMLHttpRequest();
// btn.addEventListener('click', function() {
//   // console.log('ajax call');
//   console.log(request.readyState);
//
//   request.open('GET', einstein_url);
//   request.send();
// });
//
// request.onreadystatechange = function() {
//   if(request.readyState === 4) {
//     alert('received req, should do something here');
//
//     alert(request.responseText);
//
//     alert('received text, update the bio placeholder');
//     bio.style.border = '1px solid #e8e8e8';
//     bio.innerHTML = request.responseText
//
//
//   } else {
//     alert('nothing returned yet');
//   }
// }

$(function(){

  // 2. changing to jquery format, notice we don't define the XHR class anymore
  var $btn = $('#request');
  var $bio = $('#bio');
  var url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt";

  $btn.on('click', function() {
    // 3. testing if btn click happened
    // alert('test click');

    // 4. hide button upon click
    $(this).hide();

    // 5. similar to checking ready state, but call it in as callback
    $bio.load(url, captureError);
  });

  function captureError(responseText, textStatus, request) {
    // 6. see the return $.load();
    console.log(responseText, textStatus, request);

    alert(request.readyState);
    alert(textStatus);
    alert(responseText);

    // 7. implement changes as per first lab
    $bio.css('border', '1px solid #e8e8e8');

    // 8. check if the callback can detect error by changing the url
    if(textStatus == 'error') {
        $bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    }
  }
});
