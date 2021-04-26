$(function() {
    // при нажатті на кнопку scrollup
    $('.scrollup').click(function() {
      // переміститись у верхню частину сторінки
      $("html, body").animate({
        scrollTop:0
      },2000);
    })
  })
  // при прокрутці вікна
  $(window).scroll(function() {
    // якщо більше 300px
    if ($(this).scrollTop()>300) {
      // то scrollup видима
      $('.scrollup').fadeIn();
    }
    // інакше scrollup прихована
    else {
      $('.scrollup').fadeOut();
    }
  });