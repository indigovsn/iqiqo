// GSAP Scroll Trigger Animation
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Hero Marquees Loop GSAP
let object = {
  value: 1
};

let tl = gsap.timeline({ repeat: -1 });
tl.fromTo(
  ".hero-marquees-track",
  {
    xPercent: 0
  },
  {
    xPercent: -50,
    duration: 25,
    ease: "none"
  }
);

$(".hero-marquees-track").on("mouseenter", function () {
  gsap.fromTo(
    object,
    {
      value: 1
    },
    {
      value: 0,
      duration: 0.5,
      onUpdate: () => {
        tl.timeScale(object.value);
      }
    }
  );
});

$(".hero-marquees-track").on("mouseleave", function () {
  gsap.fromTo(
    object,
    {
      value: 0
    },
    {
      value: 1,
      duration: 0.5,
      onUpdate: () => {
        tl.timeScale(object.value);
      }
    }
  );
});

// Hero Marquees DRAG GSAP
gsap.registerPlugin(Draggable);

const track = document.querySelector('.hero-marquees-track');

Draggable.create(track, {
  type: 'x',
  edgeResistance: 0.5,
  bounds: 'body',
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

// Animate From To | Parallax Album 1
$(".categories_album").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".categories_album-img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "top top",
      scrub: 0
    }
  });
  tl.fromTo(targetElement, {
      scale: "1.5",
      y: "-50%",
    },
    {
      scale: "1.2",
      y: "0%",
      duration: 1.5
    }
  );
});

// Animate From To | Parallax Album 2
$(".categories_album").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".categories_album-img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom top",
      scrub: 0
    }
  });
  tl.fromTo(targetElement, {
      scale: "1.2",
      y: "0%",
    },
    {
      scale: "1",
      y: "50%",
      duration: 1.5
    }
  );
});

// Animate From To | Parallax Poster 1
$(".categories_poster").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".categories_poster-img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "top top",
      scrub: 0
    }
  });
  tl.fromTo(targetElement, {
      scale: "1.5",
      y: "-50%",
    },
    {
      scale: "1.2",
      y: "0%",
      duration: 1.5
    }
  );
});

// Animate From To | Parallax Poster 2
$(".categories_poster").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".categories_poster-img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom top",
      scrub: 0
    }
  });
  tl.fromTo(targetElement, {
      scale: "1.2",
      y: "0%",
    },
    {
      scale: "1",
      y: "50%",
      duration: 1.5
    }
  );
});

// Animate From To | Parallax Annuario 1
$(".categories_annuario").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".categories_annuario-img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "top top",
      scrub: 0
    }
  });
  tl.fromTo(targetElement, {
      scale: "1.5",
      y: "-50%",
    },
    {
      scale: "1.2",
      y: "0%",
      duration: 1.5
    }
  );
});

// Animate From To | Parallax Annuario 2
$(".categories_annuario").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".categories_annuario-img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom top",
      scrub: 0
    }
  });
  tl.fromTo(targetElement, {
      scale: "1.2",
      y: "0%",
    },
    {
      scale: "1",
      y: "50%",
      duration: 1.5
    }
  );
});

// Hero - Change Text Color on Marquees Hover
$('.marquees-link').hover(function() {
  gsap.to('.hero-text', { color: 'white', duration: 0.1, ease: 'power2.out' });
}, function() {
  gsap.to('.hero-text', { color: mainBlack, duration: 0.1, ease: 'power2.out' });
});
