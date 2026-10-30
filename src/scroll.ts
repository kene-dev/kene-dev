import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  if (lenisInstance) lenisInstance.scrollTo(element);
  else element.scrollIntoView({ behavior: "smooth" });
}
