import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const labels = [
  {
    text: "mentorías",
    // Top-right head
    top: "-8%",
    left: "78%",
    delay: 0.9,
    color: "#3b82f6",
  },
  {
    text: "gratuitas",
    // Left head
    top: "52%",
    left: "-20%",
    delay: 1.1,
    color: "#a855f7",
  },
  {
    text: "online",
    // Bottom-right head
    top: "90%",
    left: "108%",
    delay: 1.3,
    color: "#22c55e",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Desvanece muy rápido: de opacity 1 a 0 en el primer 10% del scroll de la sección
  const labelsOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  // El fondo oscuro se aclara con el scroll (de 80% a 0% opacidad)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [0.8, 0.2]);
  const bg = useTransform(bgOpacity, (v) => `rgba(17, 24, 39, ${v})`);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center text-white px-6"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-3xl text-center">
        <div className="relative w-48 h-48 md:w-72 md:h-72 mx-auto mb-8 overflow-visible">
          <motion.img
            src="/logo.png"
            alt=""
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {labels.map((label) => (
            <motion.span
              key={label.text}
              className="absolute px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-bold rounded-full whitespace-nowrap -translate-x-1/2 -translate-y-1/2 border border-white/30 shadow-lg"
              style={{
                top: label.top,
                left: label.left,
                backgroundColor: label.color,
                boxShadow: `0 0 20px ${label.color}80, 0 0 40px ${label.color}40`,
                opacity: labelsOpacity,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 12,
                  delay: label.delay,
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: label.delay + 0.5,
                },
              }}
            >
              {label.text}
            </motion.span>
          ))}
        </div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gamedev Crafters
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ingeniería de software aplicada al desarrollo de videojuegos.
          <br />Aprendizaje pragmático, colaborativo y sin prejuicios.
        </motion.p>

        <motion.button
          onClick={() => {
            const target = document.getElementById("philosophy");
            if (!target) return;
            const start = window.scrollY;
            const end = target.getBoundingClientRect().top + start;
            const duration = 1800;
            const startTime = performance.now();
            function step(now: number) {
              const t = Math.min((now - startTime) / duration, 1);
              const ease = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
              window.scrollTo(0, start + (end - start) * ease);
              if (t < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }}
          className="inline-block mt-10 px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Conoce la comunidad
        </motion.button>
      </div>
    </motion.section>
  );
}
