import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Este componente envuelve cualquier contenido y lo anima cuando
// entra en el viewport (la parte visible del navegador) al hacer scroll.
// Usa la API "whileInView" de Framer Motion, que internamente utiliza
// la Intersection Observer API del navegador.

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // segundos de retraso antes de animar
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}      // Estado inicial: invisible y 40px abajo
      whileInView={{ opacity: 1, y: 0 }}    // Cuando es visible: aparece y sube
      viewport={{ once: true, amount: 0.2 }} // once: solo anima la primera vez
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
