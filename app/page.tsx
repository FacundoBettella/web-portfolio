import { AboutSection } from "./section/AboutSection";
import EmailSection from "./section/EmailSection";
import HeroSection from "./section/HeroSection";
import ProjectSection from "./section/ProjectSection";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-customBlack">
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  );
}
