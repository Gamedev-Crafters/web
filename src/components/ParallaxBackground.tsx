import { motion, useScroll, useTransform } from "framer-motion";

// Capa de fondo con efecto parallax.
// Altura de 300vh para tener mucho recorrido.
// Se desplaza 120vh durante el scroll completo de la página,
// lo que crea un movimiento muy visible.

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-120vh"]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 z-0 h-[300vh] pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100" />

      <div className="absolute top-[2%]  -left-[10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-blue-300/60 blur-3xl" />
      <div className="absolute top-[15%] -right-[10%] w-[85vw] h-[85vw] max-w-[900px] max-h-[900px] rounded-full bg-purple-300/55 blur-3xl" />
      <div className="absolute top-[30%] -left-[5%] w-[75vw] h-[75vw] max-w-[750px] max-h-[750px] rounded-full bg-amber-300/55 blur-3xl" />
      <div className="absolute top-[45%] -right-[5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-green-300/55 blur-3xl" />
      <div className="absolute top-[60%] -left-[15%] w-[85vw] h-[85vw] max-w-[850px] max-h-[850px] rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute top-[75%] -right-[10%] w-[75vw] h-[75vw] max-w-[750px] max-h-[750px] rounded-full bg-purple-200/50 blur-3xl" />
    </motion.div>
  );
}
