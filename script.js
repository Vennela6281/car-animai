gsap.registerPlugin(ScrollTrigger);

gsap.to("#car", {
  x: "350%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true
  }
});
