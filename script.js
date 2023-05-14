// GSAP Scroll Trigger Animation
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Animate From To | Text Modelli
$('.categories_text-wrap').each(function(index) {
  var triggerElement = $(this);
  var subtitleElement = triggerElement.find('.categories-subtitle');

  gsap.fromTo(triggerElement, {
    opacity: 0,
    paddingLeft: '0em',
    paddingBottom: '0em',
    y: '20%',
    x: '-3%',
  }, {
    opacity: 1,
    paddingLeft: '3em',
    paddingBottom: '2em',
    y: '0%',
    x: '0%',
    duration: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0
    }
  });

  gsap.fromTo(subtitleElement, {
    x: '-10%',
  }, {
    x: '0%',
    duration: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0
    }
  });
});
