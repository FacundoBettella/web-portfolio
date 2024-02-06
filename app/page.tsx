import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
