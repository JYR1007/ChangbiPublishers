$(function() {
  $('.hamburger').on('click', function () {
    $('body').addClass('menu-open');
    $('body').addClass('container');
    
    $(".hamburger").hide();
    $(".close").show();
  });

  $('.close, .sidebar-overlay').on('click', function(){
    $('body').removeClass('menu-open');
    
    $(".close").hide();
    $(".hamburger").show();
  });

  $(".fup").on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});