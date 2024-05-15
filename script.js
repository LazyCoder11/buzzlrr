gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis SCroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("href")?.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let texttl = gsap.timeline();

texttl
  .from(".logo img", {
    duration: 0.5,
    y: -20,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0.3,
  })
  .from(".logo span", {
    duration: 0.5,
    y: -10,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0.3,
  })
  .from(".menu-list a", {
    duration: 0.5,
    y: -10,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0.2,
  })
  .from(
    ".hero-title .first-title .mask> h1, .hero-title .second-title .mask> h1",
    {
      duration: 0.5,
      y: 100,
      autoAlpha: 0,
      ease: Power3.out,
      stagger: 0.2,
    }
  )
  .from(".hero-subtitle h3", {
    duration: 0.5,
    y: 60,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 0.2,
  });

const section1 = document.getElementById("vertical");
const col_left = document.querySelector(".col-left");
const timeline = gsap.timeline({ paused: true });

timeline.fromTo(
  col_left,
  { y: 0 },
  { y: "250vh", duration: 5, ease: "none" },
  0
);

const scroll1 = ScrollTrigger.create({
  animation: timeline,
  trigger: section1,
  start: "top top",
  end: "bottom center",
  scrub: true,
});
