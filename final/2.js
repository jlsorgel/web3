$(document).ready(function () {

  // carousel!

  $('.carousel').carousel({
    interval: 3000,
    keyboard: false
  });

  let carouselPaused = false;

  $('.js-carousel-pause').click(function () {
    if (carouselPaused) {
      $('.carousel').carousel('cycle');
      $(this).text("Select");
    }
    else {
      $('.carousel').carousel('pause');
      $(this).text("Unselect");
    }

    carouselPaused = !carouselPaused;

  });


  // cart numbers!

  $('.add-cart').click(function () {
    $('.count').html(function (i, val) {
      return val * 1 + 1
    });
  });


  // checkout page!





  $("#checkOut").click(function () {
    $("#checkoutForm").show();
  });


  function Fillerup() {

    if (document.getElementById('same-address').checked) {

      document.getElementById('firstNameShipping').value = document.getElementById('firstName').value;

      document.getElementById('lastNameShipping').value = document.getElementById('lastName').value;
      document.getElementById('addressShipping').value = document.getElementById('address').value;
      document.getElementById('address2Shipping').value = document.getElementById('address2').value;
      document.getElementById('zipShipping').value = document.getElementById('zip').value;
      document.getElementById('cityShipping').value = document.getElementById('city').value;
      document.getElementById('stateShipping').value = document.getElementById('state').value;
    } else {
      document.getElementById('firstNameShipping').value = "";
      document.getElementById('lastNameShipping').value = "";
      document.getElementById('addressShipping').value = "";
      document.getElementById('address2Shipping').value = "";
      document.getElementById('zipShipping').value = "";
      document.getElementById('cityShipping').value = "";
      document.getElementById('stateShipping').value = "";
    }
  }



  let form = document.getElementById('myForm');
  form.addEventListener("submit", function (evt) {
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    }
    form.classList.add('was-validated');
  })





});
