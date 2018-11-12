$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );

  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top -20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

    });

  });






  $(".slogan").typed({
      strings: ["Pythonist.","Machine Learning enthusiast.", "Web Developer."],
      typeSpeed: 30,
      startDelay: 500,
      backDelay: 500,
      loop: true,

      });


// Wrap every letter in a span
$('.hello .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

  anime.timeline({loop: true})
  .add({
    targets: '.hello .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i+1)
    }
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




});
