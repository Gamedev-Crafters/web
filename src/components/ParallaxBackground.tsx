import { motion, useScroll, useTransform } from "framer-motion";

// Capa de fondo con efecto parallax.
// Altura extra (200vh) para que al desplazarse haya contenido visible.
// El fondo se mueve un 50% de lo que scrollea el usuario.

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-60vh"]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 z-0 h-[200vh] pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100" />

      {/* Manchas más grandes, más intensas, cubriendo todo el ancho */}
      <div className="absolute top-[5%]  -left-[10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-blue-300/60 blur-3xl" />
      <div className="absolute top-[25%] -right-[10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-purple-300/55 blur-3xl" />
      <div className="absolute top-[50%] -left-[5%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-amber-300/55 blur-3xl" />
      <div className="absolute top-[75%] -right-[5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-green-300/55 blur-3xl" />
    </motion.div>
  );
}
