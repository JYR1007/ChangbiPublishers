$(function() {
  $('.hamburger').on('click', function () {
    $('.sidebar').stop().animate({
      right: '0'
    }, 500);

    $('.container').stop().animate({
      right: '300px'
    }, 500);

    $(".hamburger").hide();
    $(".close").show();
  })

  $('.close').on('click', function(){
    $('.sidebar').stop().animate({
      right: '-300px'
    }, 500);

    $('.container').stop().animate({
      right: '0'
    }, 500);

    $(".close").hide();
    $(".hamburger").show();
  });

  $(".fup").on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});