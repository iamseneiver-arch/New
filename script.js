gsap.registerPlugin(ScrollTrigger);

/* TEXT MOVES UP */
gsap.to("#title", {
  y: -300,
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* CLOUDS MOVE */
gsap.to(".clouds", {
  x: -500,
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* DOOR COMES CLOSER */
gsap.to(".door", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".scene",
    start: "top center",
    end: "center center",
    scrub: true
  }
});

/* DOOR OPEN */
gsap.to(".door-left", {
  rotationY: -120,
  scrollTrigger: {
    trigger: ".scene",
    start: "center center",
    end: "bottom center",
    scrub: true
  }
});

gsap.to(".door-right", {
  rotationY: 120,
  scrollTrigger: {
    trigger: ".scene",
    start: "center center",
    end: "bottom center",
    scrub: true
  }
});

/* PORTFOLIO REVEAL */
gsap.to("#portfolio", {
  y: -500,
  scrollTrigger: {
    trigger: ".scene",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true
  }
});
