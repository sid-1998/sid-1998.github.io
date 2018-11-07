$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  $(".slogan").typed({
      strings: ["Pythonist.","Machine Learning enthusiast.", "Web Developer."],
      typeSpeed: 30,
      startDelay: 500,
      backDelay: 500,
      loop: true,

      });

      $('.hello .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
      });

      anime.timeline({loop: true})
        .add({
          targets: '.hello .letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 500,
          delay: function(el, i) {
            return 50 * i;
          }
        }).add({
          targets: '.hello',
          opacity: 100,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 500
        });

});
