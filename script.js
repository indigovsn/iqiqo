// Hero - Change Text Color on Marquees Hover
$('.marquees-link').hover(function() {
  gsap.to('.hero-text', { color: 'white', duration: 0.1, ease: 'power2.out' });
}, function() {
  gsap.to('.hero-text', { color: mainBlack, duration: 0.1, ease: 'power2.out' });
});
