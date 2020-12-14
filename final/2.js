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


  // cart!





  $('.add-cart').click(function () {
    $('.count').html(function (i, val) {
      return val * 1 + 1
    });
  });





});
