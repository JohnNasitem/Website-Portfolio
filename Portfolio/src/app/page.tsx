import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section"; 
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import ToTop from "@/components/to-top";
import Navbar from "@/components/navbar";
import Link from "next/link";

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
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <div>
        <div id='page_section1' className="text-center text-sm mt-4">
          © 2025 John Nasitem. All rights reserved.<br/>
          <Link target="_blank" href="https://icons8.com/icon/83221/sun" className="underline">Sun</Link> and <Link target="_blank" href="https://icons8.com/icon/59841/moon-symbol" className="underline">Moon</Link>  icon by <a target="_blank" href="https://icons8.com" className="underline">Icons8</a>
        </div>
      </div>
    </div>
  );
}
