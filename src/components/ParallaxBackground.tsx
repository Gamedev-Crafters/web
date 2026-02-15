import { motion, useScroll, useTransform } from "framer-motion";

// Capa de fondo con efecto parallax.
// Está fija en la ventana (fixed) y se mueve más lento que el scroll.
// El z-index 0 la pone detrás de las secciones (que tienen z-10).

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 z-0 h-[130vh] pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100" />

      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-blue-300/50 blur-3xl" />
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-300/45 blur-3xl" />
      <div className="absolute top-[70%] left-[30%] w-[400px] h-[400px] rounded-full bg-amber-300/45 blur-3xl" />
      <div className="absolute top-[90%] right-[25%] w-[500px] h-[500px] rounded-full bg-green-300/45 blur-3xl" />
    </motion.div>
  );
}
