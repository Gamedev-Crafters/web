import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const palette = ["#e0a815", "#3b82f6", "#a855f7", "#22c55e"];

const bullets = [
  "Las mentorías son transversales: no están atadas a ninguna tecnología concreta",
  "Tampoco a una práctica ni a un lenguaje de programación",
  "Pero hay temas que predominan y que más hemos trabajado:",
];

// Posiciones, colores y animación asignados a mano para máxima dispersión visual.
// top/left en %, dur = duración flotación, dist = distancia px.
const topics: { text: string; top: number; left: number; dur: number; dist: number }[] = [
  { text: "Pair Programming",        top: 3,   left: 3,   dur: 3.3, dist: 6  },
  { text: "TDD",                     top: 6,   left: 32,  dur: 3.2, dist: 7  },
  { text: "Assemblies",              top: 10,  left: 55,  dur: 3.8, dist: 5  },
  { text: "Diseño",                  top: 5,   left: 82,  dur: 3.6, dist: 8  },
  { text: "Patrones",                top: 25,  left: 10,  dur: 3.8, dist: 6  },
  { text: "Testing",                 top: 22,  left: 42,  dur: 4.0, dist: 5  },
  { text: "Clean Architecture",      top: 28,  left: 72,  dur: 3.4, dist: 7  },
  { text: "Arquitectura",            top: 42,  left: 3,   dur: 4.2, dist: 9  },
  { text: "MVC",                     top: 45,  left: 38,  dur: 3.1, dist: 8  },
  { text: "Mob Programming",         top: 40,  left: 65,  dur: 4.1, dist: 8  },
  { text: "Hexagonal Architecture",  top: 58,  left: 18,  dur: 3.9, dist: 5  },
  { text: "C#",                      top: 60,  left: 52,  dur: 4.4, dist: 6  },
  { text: "DDD",                     top: 62,  left: 78,  dur: 3.4, dist: 7  },
  { text: "Unity",                   top: 80,  left: 22,  dur: 3.5, dist: 7  },
  { text: "Godot",                   top: 82,  left: 58,  dur: 3.7, dist: 9  },
];

function randomColors() {
  return topics.map(() => Math.floor(Math.random() * palette.length));
}

export default function Topics() {
  const [colorIndices, setColorIndices] = useState(randomColors);
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    topics.forEach((_, i) => {
      // Offset aleatorio inicial (0–3s), luego cada 4s
      const offset = Math.random() * 3000;
      timers.push(setTimeout(() => {
        setColorIndices((prev) => {
          const next = [...prev];
          next[i] = Math.floor(Math.random() * palette.length);
          return next;
        });
        const interval = setInterval(() => {
          setColorIndices((prev) => {
            const next = [...prev];
            next[i] = Math.floor(Math.random() * palette.length);
            return next;
          });
        }, 4000);
        timers.push(interval as unknown as ReturnType<typeof setTimeout>);
      }, offset));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="topics" className="py-16 px-6 bg-white/40 backdrop-blur-xs">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            ¿Qué temas tratamos?
          </h2>
        </ScrollReveal>

        <ul className="mt-10 max-w-2xl mx-auto space-y-4">
          {bullets.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <li className="flex gap-3 items-start text-lg text-gray-600">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                {item}
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal delay={0.3}>
          <div className="relative mt-12 h-[280px] md:h-[240px]">
            {topics.map((topic, i) => {
              const color = palette[colorIndices[i]];
              return (
                <motion.span
                  key={topic.text}
                  className="absolute px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-white rounded-full whitespace-nowrap border border-white/30 transition-colors duration-700"
                  style={{
                    top: `${topic.top}%`,
                    left: `${topic.left}%`,
                    backgroundColor: color,
                    boxShadow: `0 0 16px ${color}60, 0 0 32px ${color}30`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  animate={{
                    y: [0, -topic.dist, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: i * 0.12 },
                    scale: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      delay: i * 0.12,
                    },
                    y: {
                      duration: topic.dur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.12 + 0.5,
                    },
                  }}
                >
                  {topic.text}
                </motion.span>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
