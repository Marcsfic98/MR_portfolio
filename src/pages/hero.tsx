import { About } from "../components/about/about";
import ContactSection from "../components/contact/contact";
import ExperienceSection from "../components/experience/experience";
import { Home } from "../components/home/home";
import ProjectsSection from "../components/projects/projects";
import { SkillsMindMap } from "../components/stacks/stacks";

export function Hero() {
  return (
    <>
      <Home />
      <About />
      <SkillsMindMap />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
