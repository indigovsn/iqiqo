// GSAP Scroll Trigger Animation
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// MEDIA QUERY DESKTOP
const isDesktop = window.innerWidth > 991;

if (isDesktop) {
  // Animate From To | Text Modelli
  $('.categories_text-wrap').each(function(index) {
    var triggerElement = $(this);
    var subtitleElement = triggerElement.find('.categories-subtitle');

    gsap.fromTo(triggerElement, {
      opacity: 0,
      y: '10%',
      x: '-5%',
    }, {
      opacity: 1,
      y: '0%',
      x: '0%',
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    gsap.fromTo(subtitleElement, {
      x: '0%',
    }, {
      x: '0%',
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
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

  // Itera attraverso le configurazioni e crea le animazioni solo su desktop
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
}
