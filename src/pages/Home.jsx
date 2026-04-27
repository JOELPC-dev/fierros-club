import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Plans from "../components/sections/Plans";
import Gallery from "../components/sections/Gallery";
import Location from "../components/sections/Location";
import Contact from "../components/sections/Contact";

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <Navbar scrollTo={scrollTo} scrolled={scrolled} />
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Plans scrollTo={scrollTo} />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default Home;