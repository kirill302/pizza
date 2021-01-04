$(document).ready(function() {

   $('.intro__burger').click(function() {
      $('.intro__nav,.intro__burger').toggleClass('active');
      $('body').toggleClass('lock');

   });

});
