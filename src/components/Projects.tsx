import { ArrowUpRight } from "lucide-react";
import amelSusanImg from "../assets/85ae68f08b7ef61da84f43f51b3c2b3e911cf787.png";
import matrixScentsImg from "../assets/Matrix-current.png";
import matchdayImg from "../assets/MDG.png";

const projects = [
  {
    number: "01",
    title: "Matrix Scents",
    kind: "E-commerce · Fragrance",
    description:
      "A considered shopping experience for a fragrance house, bringing curated scents, clear product discovery, and a polished checkout into one storefront.",
    image: matrixScentsImg,
    tags: ["React", "TypeScript", "Supabase"],
    liveUrl: "https://matrixscents.com",
    imagePosition: "object-top",
  },
  {
    number: "02",
    title: "Amel Susan",
    kind: "Brand website · Food & distribution",
    description:
      "A multi-page home for a Nigerian breakfast and baking products distributor, with product discovery and a clear path for prospective distributors.",
    image: amelSusanImg,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://amelsusanproducts.com",
    imagePosition: "object-center",
  },
  {
    number: "03",
    title: "Matchday",
    kind: "Web app · Sports",
    description:
      "A football predictions platform where fans enter competitions, follow match outcomes, and compete for shared prize pools.",
    image: matchdayImg,
    tags: ["React", "NestJS", "MongoDB"],
    liveUrl: "https://matchday.games",
    imagePosition: "object-center",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects-section py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="projects-heading" data-reveal>
          <p className="eyebrow">Selected work · 2023—2026</p>
          <div className="projects-heading-row">
            <h2>Recent projects</h2>
            <p>Thoughtful digital products, made for the people who use them every day.</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal
              className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
            >
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-image-link" aria-label={`Visit ${project.title}`}>
                <div className="project-image-wrap">
                  <img data-parallax src={project.image} alt={`${project.title} website`} className={`project-image ${project.imagePosition}`} />
                  <span className="project-open"><ArrowUpRight size={20} /></span>
                </div>
              </a>
              <div className="project-copy">
                <div className="project-meta"><span>{project.number}</span><span>{project.kind}</span></div>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-visit">Visit site <ArrowUpRight size={16} /></a>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
