// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

//   var cedula_ruc = document.getElementById('cedula-ruc');
//   cedula_ruc.oninvalid = function(event) {
//     event.target.setCustomValidity('numeros del 0 al 9 pero solo 10 o 13 nume');
// }

/*scrooll deslizante*/
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#flechaArriba, #flechaAbajo", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#flechaArriba a, #flechaAbajo a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    console.log (this.hash);
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});




