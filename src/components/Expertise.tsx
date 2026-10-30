import { ArrowUpRight, AppWindow, Database, Gauge, PanelsTopLeft } from "lucide-react";

const services = [
  { icon: PanelsTopLeft, index: "01", title: "Websites that feel like your brand", text: "Responsive marketing sites and storefronts with clear messaging, strong visual hierarchy, and a smooth path to action." },
  { icon: AppWindow, index: "02", title: "Web apps built around your workflow", text: "Product interfaces, dashboards, and custom tools that make everyday tasks simpler." },
  { icon: Database, index: "03", title: "The systems behind the screen", text: "APIs, integrations, and database-backed features that help the product work end to end." },
  { icon: Gauge, index: "04", title: "Polish that makes a difference", text: "Performance improvements, responsive refinements, and interaction details across devices." },
];

const technologies = ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS"];

export function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="section-shell">
        <div className="expertise-heading" data-reveal>
          <div><p className="eyebrow">What I bring to the table</p><h2>From first click<br />to <span>finished product.</span></h2></div>
          <p className="expertise-lede">A practical mix of design sense and engineering, so the whole experience hangs together.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, index, title, text }) => (
            <article key={index} className="service-card" data-reveal>
              <div className="service-topline"><span>{index}</span><Icon size={21} strokeWidth={1.6} /></div>
              <h3>{title}</h3><p>{text}</p><span className="service-rule" />
            </article>
          ))}
        </div>
        <div className="tech-strip" data-reveal>
          <span className="eyebrow">Tools I reach for</span>
          <div>{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a href="#projects" aria-label="See the technologies in my work"><ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
