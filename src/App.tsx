import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Praises from "./components/Praises";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// App es el componente raíz. Ensambla todas las secciones de la web.
// React renderiza estos componentes en orden, de arriba a abajo,
// formando la página completa.

export default function App() {
  return (
    <>
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
