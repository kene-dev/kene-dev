import { ArrowUpRight } from "lucide-react";

const steps = [
  { number: "01", title: "Start with the problem", copy: "We get clear on what needs to work, who it is for, and what a good result looks like." },
  { number: "02", title: "Make a solid plan", copy: "I map the experience and technical approach, then share progress early and often." },
  { number: "03", title: "Build, refine, launch", copy: "We test the details together and ship a product that is ready for real people." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <p className="eyebrow">A good process makes good work</p>
          <div className="projects-heading-row mt-4 mb-12">
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900">How I work</h2>
            <p className="max-w-sm">A straightforward, collaborative process from the first conversation to launch.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <article key={step.number} data-reveal className="border border-gray-200 p-7 md:p-9 min-h-56">
              <span className="eyebrow">{step.number}</span>
              <h3 className="mt-8 text-2xl font-medium text-gray-900">{step.title}</h3>
              <p className="mt-3 leading-relaxed">{step.copy}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className="text-link mt-10">Tell me what you’re working on <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
