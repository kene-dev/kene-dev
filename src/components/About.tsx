import { ArrowUpRight, Braces, Layers3, MousePointer2 } from "lucide-react";

const approach = [
  { icon: MousePointer2, number: "01", title: "Start with the user", text: "Clear journeys, useful content, and an interface that makes sense on the first visit." },
  { icon: Braces, number: "02", title: "Build for the real world", text: "Responsive frontend and dependable backend work, shaped around how the business operates." },
  { icon: Layers3, number: "03", title: "Sweat the details", text: "Thoughtful interactions, fast pages, and the small refinements people notice." },
];

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <div className="about-intro" data-reveal>
          <p className="eyebrow">A bit about how I work</p>
          <h2>Good work is equal parts <span>craft</span> and <span>care.</span></h2>
        </div>
        <div className="about-body">
          <div className="about-note" data-reveal>
            <span className="about-mark">“</span>
            <p>I’m a web developer with 5+ years of experience. I work across frontend and backend to help businesses turn ideas into well-made digital products.</p>
            <a href="#contact">A little more about your project <ArrowUpRight size={16} /></a>
          </div>
          <div className="approach-list">
            {approach.map(({ icon: Icon, number, title, text }) => (
              <article key={number} className="approach-item" data-reveal>
                <span className="approach-number">{number}</span>
                <div className="approach-icon"><Icon size={19} strokeWidth={1.7} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
