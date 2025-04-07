import Navbar from "@/components/navbar";
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
    <div>
      <ToTop />
      <Navbar links={narbarLinks} logo="grad.png" />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
