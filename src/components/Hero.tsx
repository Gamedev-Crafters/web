import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        <motion.img
          src="/logo.png"
          alt=""
          className="w-48 h-48 md:w-72 md:h-72 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
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

        <motion.a
          href="#philosophy"
          className="inline-block mt-10 px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Conoce la comunidad
        </motion.a>
      </div>
    </section>
  );
}
