(function(){
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');
  
  myForm.addEventListener('submit', function(event) {
    myForm.setAttribute('action', 'https://formspree.io/micheal.wallert@gmail.com');
  });
}());