$(document).ready(function() {


   // intro burger
   $('.intro__burger').click(function() {
      $('.intro__nav,.intro__burger').toggleClass('active');
      $('body').toggleClass('lock');
   });

});

// slider
new Swiper('.swiper-container', {
   slidesPerView: 'auto',

   spaceBetween: 0,
   
   loop: true,


   freeMode: true,

});

