$(document).ready(function () {
  $('.carousel').carousel({
    interval: 2000,
    keyboard: false,
  });

  let carouselPaused = false;

  $(".js-pause").click(function () {
    if (carouselPaused) {
      $('carousel').carousel("cycle");
      $(this).text("Pause");

    }
    else {
      $('carousel').carousel('pause');
      $(this).text("Go");
    }

    carouselPaused = !carouselPaused;
  })

  $('.js-model-launch').click(function () {
    $('#myModal').modal({
      backdrop: 'static'
    });

  })

});