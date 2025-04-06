import Image from "next/image";
import Navbar from "@/components/navbar";
import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section"; 
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const narbarLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div>
      <Navbar links={narbarLinks} logo="../../public/vercel.svg" />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
