gsap.registerPlugin(ScrollTrigger);

gsap.to("#car", {
  x: "300%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true
  }
});
