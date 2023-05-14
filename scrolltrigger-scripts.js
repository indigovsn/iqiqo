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
    ease: 'power2.out',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom center',
      scrub: true
    }
  });

  gsap.fromTo(subtitleElement, {
    x: '-10%',
  }, {
    x: '0%',
    ease: 'power2.out',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom center',
      scrub: true
    }
  });
});

// Categories FAKE PARALLAX query
const animationsConfig = [
  {
    triggerClass: '.categories_album',
    targetClass: '.categories_album-img',
    start: 'top bottom',
    end: 'top top',
    initialScale: '1.5',
    initialY: '-50%',
    finalScale: '1.2',
    finalY: '0%',
    duration: 1.5
  },
  {
    triggerClass: '.categories_album',
    targetClass: '.categories_album-img',
    start: 'top top',
    end: 'bottom top',
    initialScale: '1.2',
    initialY: '0%',
    finalScale: '1',
    finalY: '50%',
    duration: 1.5
  },
  {
    triggerClass: '.categories_poster',
    targetClass: '.categories_poster-img',
    start: 'top bottom',
    end: 'top top',
    initialScale: '1.5',
    initialY: '-50%',
    finalScale: '1.2',
    finalY: '0%',
    duration: 1.5
  },
  {
    triggerClass: '.categories_poster',
    targetClass: '.categories_poster-img',
    start: 'top top',
    end: 'bottom top',
    initialScale: '1.2',
    initialY: '0%',
    finalScale: '1',
    finalY: '50%',
    duration: 1.5
  },
  // Configurazione per la classe "annuario"
  {
    triggerClass: '.categories_annuario',
    targetClass: '.categories_annuario-img',
    start: 'top bottom',
    end: 'top top',
    initialScale: '1.5',
    initialY: '-50%',
    finalScale: '1.2',
    finalY: '0%',
    duration: 1.5
  },
  {
    triggerClass: '.categories_annuario',
    targetClass: '.categories_annuario-img',
    start: 'top top',
    end: 'bottom top',
    initialScale: '1.2',
    initialY: '0%',
    finalScale: '1',
    finalY: '50%',
    duration: 1.5
  },
];

// Itera attraverso le configurazioni e crea le animazioni per ciascuna
animationsConfig.forEach(config => {
  const { triggerClass, targetClass, start, end, initialScale, initialY, finalScale, finalY, duration } = config;

  $(triggerClass).each(function(index) {
    const triggerElement = $(this);
    const targetElement = triggerElement.find(targetClass);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        scrub: 0
      }
    });

    tl.fromTo(targetElement, {
      scale: initialScale,
      y: initialY
    }, {
      scale: finalScale,
      y: finalY,
      duration
    });
  });
});
