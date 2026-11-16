document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  const nav = document.querySelector(".nav");
  document.querySelector(".menu-toggle").addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  if (!window.gsap || !window.ScrollTrigger || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", {y:90, opacity:0, duration:1.2, ease:"power4.out", delay:.15});
  gsap.from(".hero .eyebrow, .hero-copy, .scroll-cue", {y:25, opacity:0, duration:.8, stagger:.15, delay:.5});
  gsap.to(".orb-one", {scale:1.18, rotation:25, scrollTrigger:{trigger:".hero", start:"top top", end:"bottom top", scrub:1}});
  gsap.from(".big-statement", {x:-80, opacity:0, duration:1, scrollTrigger:{trigger:".manifesto", start:"top 70%"}});
  gsap.from(".manifesto-side", {y:60, opacity:0, duration:1, scrollTrigger:{trigger:".manifesto", start:"top 65%"}});
  gsap.from(".service-card", {y:45, opacity:0, stagger:.14, duration:.7, scrollTrigger:{trigger:".service-list", start:"top 75%"}});
  gsap.from(".visual-window", {y:90, rotation:5, opacity:0, duration:1, scrollTrigger:{trigger:".feature", start:"top 70%"}});
  gsap.from(".feature-copy", {x:70, opacity:0, duration:1, scrollTrigger:{trigger:".feature", start:"top 65%"}});
  gsap.from(".step", {y:55, opacity:0, stagger:.15, duration:.7, scrollTrigger:{trigger:".steps", start:"top 78%"}});
  gsap.from(".contact h2, .contact-copy, .contact-button", {y:45, opacity:0, stagger:.16, duration:.8, scrollTrigger:{trigger:".contact", start:"top 65%"}});
});