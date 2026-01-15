import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { EducationSection } from "@/components/Education";
import { ProjectsSection } from "@/components/Projects";
import { ExperienceSection } from "@/components/Experience";
import { HackathonsSection } from "@/components/Hackathons";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Section id="education" title="Education">
        <EducationSection />
      </Section>
      <Section id="experience" title="Experience">
        <ExperienceSection />
      </Section>
      <Section id="projects" title="Projects">
        <ProjectsSection />
      </Section>
      <Section id="hackathons" title="Hackathons">
        <HackathonsSection />
      </Section>
      <Footer />
    </div>
  );
}
