import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSection as smoothScrollToSection } from "../scroll";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sectionIds = ["hero", "about", "projects", "expertise", "testimonials", "contact"];
      const marker = window.innerHeight * 0.36;
      const current = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom > marker;
        });
      if (current) setActiveSection(current.id);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (sectionId: string) =>
    `nav-link ${activeSection === sectionId ? "is-active" : ""}`;

  const scrollToSection = (sectionId: string) => {
    smoothScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
              <span className="text-xl font-semibold text-gray-900">kene-dev</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={navLinkClass("about")}
              aria-current={activeSection === "about" ? "location" : undefined}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={navLinkClass("projects")}
              aria-current={activeSection === "projects" ? "location" : undefined}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className={navLinkClass("expertise")}
              aria-current={activeSection === "expertise" ? "location" : undefined}
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={navLinkClass("testimonials")}
              aria-current={activeSection === "testimonials" ? "location" : undefined}
            >
              Process
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className={`${navLinkClass("about")} text-left px-4 py-2`}
                aria-current={activeSection === "about" ? "location" : undefined}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${navLinkClass("projects")} text-left px-4 py-2`}
                aria-current={activeSection === "projects" ? "location" : undefined}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className={`${navLinkClass("expertise")} text-left px-4 py-2`}
                aria-current={activeSection === "expertise" ? "location" : undefined}
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`${navLinkClass("testimonials")} text-left px-4 py-2`}
                aria-current={activeSection === "testimonials" ? "location" : undefined}
              >
                Process
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
