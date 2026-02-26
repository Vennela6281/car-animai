gsap.registerPlugin(ScrollTrigger);
// Headline Stagger Animation
gsap.to(".headline span", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  stagger: 0.05
});
// Stats Stagger Animation
gsap.to(".stat", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
  delay: 0.8
});
// Scroll Based Car Animation
gsap.to(".car-image", {
  y: -300,
  scale: 1.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
});
