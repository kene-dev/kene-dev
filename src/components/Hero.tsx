import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import matrixHome from "../assets/Matrix-current.png";

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow hero-kicker"><span className="status-dot" /> Independent web developer <span className="eyebrow-divider">/</span> Nigeria</p>
          <h1>Good ideas<br />deserve a <span>great</span><br /><i>website.</i></h1>
          <p className="hero-summary">I design and build websites and web apps that make it easier for people to find you, trust you, and get things done.</p>
          <div className="hero-actions">
            <a href="#projects" className="button-dark">Explore selected work <ArrowDownRight size={18} /></a>
            <a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-profile-links">
            <span>5+ years building for the web</span>
            <a href="https://github.com/kene-dev" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
          </div>
        </div>

        <div className="hero-art" data-reveal>
          <div className="hero-art-grid" />
          <div className="hero-browser">
            <div className="browser-bar"><div className="browser-dots"><i /><i /><i /></div><span>matrixscents.com</span><span className="browser-lock">↗</span></div>
            <img data-parallax src={matrixHome} alt="Matrix Scents storefront, a recent web project" />
          </div>
          <div className="hero-note"><span className="note-index">01 / CURRENTLY IN THE WILD</span><strong>Matrix<br />Scents</strong><span>Fragrance e-commerce</span></div>
          <span className="hero-orbit orbit-one" />
          <span className="hero-orbit orbit-two" />
          <div className="hero-side-label">DESIGN&nbsp; × &nbsp;DEVELOPMENT&nbsp; × &nbsp;DETAIL</div>
        </div>
      </div>
      <div className="hero-bottomline"><span>Scroll to explore</span><span>Selected work <b>↓</b></span><span>01—03</span></div>
    </section>
  );
}
