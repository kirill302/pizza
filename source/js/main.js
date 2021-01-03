$(document).ready(function() {

   // $('window').scroll(function() {
   //    $('.intro__header').addClass('scroll');
   //  });

   $('.intro__burger').click(function() {
      $('.intro__nav,.intro__burger').toggleClass('active');
      $('body').toggleClass('lock');

   });

});

// убирает точки у нумерации списка


