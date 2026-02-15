import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Este componente crea una capa de fondo que se mueve más lento
// que el scroll del contenido, creando efecto parallax.
// useScroll trackea el progreso del scroll (0 a 1).
// useTransform convierte ese progreso en un desplazamiento Y
// más lento (el fondo se mueve solo un 30% de lo que scrolleas).

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // El fondo se desplaza un 30% de lo que scrollea el usuario
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="fixed inset-0 -z-10 h-[130vh]"
      aria-hidden="true"
    >
      {/* Gradiente abstracto con formas sutiles */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100" />

      {/* Círculos decorativos difuminados */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-200/25 blur-3xl" />
      <div className="absolute top-[70%] left-[30%] w-[400px] h-[400px] rounded-full bg-amber-200/25 blur-3xl" />
      <div className="absolute top-[90%] right-[25%] w-[500px] h-[500px] rounded-full bg-green-200/25 blur-3xl" />
    </motion.div>
  );
}
