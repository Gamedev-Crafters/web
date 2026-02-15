import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Praises from "./components/Praises";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxBackground from "./components/ParallaxBackground";

export default function App() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Praises />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
