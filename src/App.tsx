import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Expertise } from "./components/Expertise";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenisInstance } from "./scroll";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.5,
      anchors: true,
    });
    setLenisInstance(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, index) => {
        let hasPlayed = false;
        const reveal = () => {
          if (hasPlayed) return;
          hasPlayed = true;
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 54, filter: "blur(7px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.95,
              delay: Math.min((index % 4) * 0.07, 0.21),
              ease: "power3.out",
              clearProps: "filter",
            },
          );
        };

        ScrollTrigger.create({
          trigger: element,
          start: "top 86%",
          once: true,
          onEnter: reveal,
        });

        if (ScrollTrigger.isInViewport(element, 0.86)) reveal();
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -5, scale: 1.04 },
          {
            yPercent: 5,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    requestAnimationFrame(refresh);

    return () => {
      context.revert();
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <div className="portfolio min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
