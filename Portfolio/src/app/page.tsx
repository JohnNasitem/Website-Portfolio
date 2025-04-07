import Navbar from "@/components/navbar";
import ThemeToggle from "@/components/theme-toggle";
import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section"; 
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import ToTop from "@/components/to-top";

export default function Home() {
  const narbarLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="text-[var(--color-foreground)] bg-[var(--color-background)]">
      <ToTop />
      <Navbar links={narbarLinks} logo="grad.png" />
      <div className="sticky top-0 right-0 w-fit bg-[var(--color-bg-alt-accent)] p-4 z-999 m-4">
        <ThemeToggle/>
      </div>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
