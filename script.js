// Hero - Change Text Color on Marquees Hover
$('.marquees-link').hover(function() {
  gsap.to('.hero-text', { color: 'white', duration: 0.1, ease: 'power2.out' });
}, function() {
  gsap.to('.hero-text', { color: mainBlack, duration: 0.1, ease: 'power2.out' });
});

// Hero - Change LOGO on Marquees Hover
$('.marquees-link').hover(function() {
  $('.nav-logo').addClass('inactive');
  $('.nav-logo-white').removeClass('inactive');
}, function() { 
  $('.nav-logo-white').addClass('inactive');
  $('.nav-logo').removeClass('inactive');
});

// Hero - NAV SHADOW on Marquees Hover
$('.marquees-link').hover(function() {
  gsap.to('.nav-shadow', { opacity: 1, duration: 0.3, ease: 'power2.out' });
}, function() {
  gsap.to('.nav-shadow', { opacity: 0, duration: 0.3, ease: 'power2.out' });
});

// Hero - Marquees Siblings Opacity & Text Color
$('.hero-marquees_wrap').on("mouseenter", ".marquees-link", function() {
  $(this).addClass("active");
  $(this).closest('.hero-marquees').find('.marquees-link').not(this).addClass("inactive");
  $(this).closest('.hero-marquees_wrap').find('.hero-marquees').not($(this).closest('.hero-marquees')).find('.marquees-link').addClass("inactive");
});

$('.hero-marquees_wrap').on("mouseleave", ".marquees-link", function() {
  $(this).removeClass("active");
  $(this).closest('.hero-marquees').find('.marquees-link').not(this).removeClass("inactive");
  $(this).closest('.hero-marquees_wrap').find('.hero-marquees').not($(this).closest('.hero-marquees')).find('.marquees-link').removeClass("inactive");
});

// Hero - Shadow Animation
$('.marquees-link').hover(function() {
  gsap.to('.hero-shadow', { opacity: 1, duration: 0.3, ease: 'power2.out' });
}, function() {
  gsap.to('.hero-shadow', { opacity: 0, duration: 0.3, ease: 'power2.out' });
});

// Hero Video Hover
$(".marquees-link").on("mouseenter", function () {
  var $container = $(this).closest('.hero_section'); // Trova il contenitore principale
  var $videoWrappers = $container.find(".hero_video"); // Trova tutti i video wrappers all'interno del contenitore
  $videoWrappers.each(function () {
    var video = $(this).find("video")[0]; // Trova l'elemento video all'interno del wrapper
    video.currentTime = 0;
    video.play();
  });
});

// Hero Video Opacity
const links = document.querySelectorAll('.marquees-link');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const videoId = link.getAttribute('data-video-id');
    const video = document.getElementById(videoId);
    
    gsap.to(video, { opacity: 1, ease: 'power2.out', duration: 0.3 });
  });
  
  link.addEventListener('mouseleave', () => {
    const videoId = link.getAttribute('data-video-id');
    const video = document.getElementById(videoId);
    
    gsap.to(video, { opacity: 0, ease: 'power2.out', duration: 0.3 });
  });
});
