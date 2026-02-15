import { motion } from "framer-motion";

// El Hero es la primera sección que ve el usuario.
// Es grande, llamativa, y establece el tono de la web.
// Aquí usamos motion directamente (no ScrollReveal) porque
// queremos que anime al cargar la página, no al hacer scroll.

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          GameDev Crafters
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Una comunidad de desarrolladores de videojuegos aprendiendo,
          creando y compartiendo juntos.
        </motion.p>

        <motion.a
          href="#about"
          className="inline-block mt-10 px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Descubre más
        </motion.a>
      </div>
    </section>
  );
}
