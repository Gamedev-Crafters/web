import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Praise {
  name: string;
  text: string;
}

const praises: Praise[] = [
  {
    name: "JaviStark",
    text: `Para mí las mentorías han sido un cambio total de mentalidad. Desde hace años que soy autodidacta y todos los conocimientos que adquiría formaban una amalgama de datos de diversidad de fuentes que no necesariamente eran coherentes entre sí y no estaban contrastados. Llegar a las mentorías me ha abierto la oportunidad de debatir cantidad de temas, de realizar lecturas que han asentado las pocas cosas que sabía y me ha surtido de conocimientos, metodologías y prácticas que no sabía que tenía que aprender, porque son cosas que para alguien autodidacta pasan absolutamente por debajo del radar porque no tenemos forma de saber siquiera que existen.`,
  },
  {
    name: "Javi de Dueñas",
    text: `Las mentorías de Gamedev Crafters son estupendas. Me han ayudado mucho a dirigir mi desarrollo profesional como ingeniero de software con el enfoque adecuado, y desde el primer día la integración en el grupo ha sido excelente. Se realizan muchas actividades formativas de las que siempre se aprende y se saca algo nuevo gracias también a que el caché de los mentores es muy bueno. Hay un ambiente de colaboración entre los grupos de las mentorías excepcional, que juntado con la diversidad de perspectivas enriquecen muchísimo.`,
  },
  {
    name: "Fran",
    text: `Durante los 6 meses que he estado participando en las mentorías de Gamedev Crafters he aprendido mucho más que durante los 2 años de formación en programación previos. Creo que uno de los grandes problemas de los programadores novatos es que, después de enseñarte las herramientas básicas de programación, nadie te aporta ningún tipo de estructura, andamiaje o principios para afrontar tu nuevo trabajo. Si tienes suerte, un perfil senior te enseñará a solucionar problemas concretos a su manera, y te dará una serie de principios dogmáticos de programación, que además serán diferentes si le preguntas a otro senior.`,
  },
  {
    name: "Adrián",
    text: `En las mentorías hemos hecho sesiones de programación, proyectos en equipo y discusiones sobre literatura especializada, y hemos podido aprender y aplicar de manera práctica conceptos de diseño y desarrollo de software de gran importancia para su sostenibilidad y eficiencia. Por desgracia estas prácticas son muy desconocidas en la indústria de videojuegos, en la que he encontrado poca oferta formativa de calidad.`,
  },
  {
    name: "Paco",
    text: `Nos guían en como programar, nos enseñan sus mejores prácticas, cosas de profesionales que llevan años en la industria que no aprendes hasta que pasan años de tu carrera, y que incluso algunos profesionales del sector, no saben hacer. He aprendido mas en las mentorías que probablemente en el ultimo año haciendo proyectos de Unity solo por mi cuenta, o en lo que llevo en mi trabajo. De programación, y como persona.`,
  },
  {
    name: "JaviStark",
    text: `Al entrar en la universidad lo he hecho con un criterio y un punto de vista madurado por estas mentorías. Me han empoderado para recibir las enseñanzas académicas no solo como contenidos que se plasman en un examen sino como conocimiento que realmente tendrá un impacto en mi futuro como desarrollador, ya que se han construido sobre lecturas y experiencias que no podría haber adquirido en ningún otro lugar que no fuera Gamedev Crafters.`,
  },
  {
    name: "Ismael",
    text: `En muy poco tiempo he conseguido progresar enormemente en mi carrera como programador. La dedicación de Ángel, Iván y Ricardo, los organizadores del grupo, es excepcional; no solo comparten su enorme conocimiento, sino que también tienen una gran habilidad para explicar conceptos complejos de manera accesible. Es un placer trabajar con ellos porque son personas muy atentas, amables, responsables y sacrificadas. Estoy muy agradecido por haber encontrado este grupo y por la oportunidad de conocer a personas increíbles.`,
  },
  {
    name: "Fran",
    text: `Más que ayudarnos a superar muros concretos, nos han enseñado una serie de herramientas para afrontar cualquier obstáculo que se nos presente. En lugar de darnos un martillo dorado que no existe para derribar un muro, nos han dado un montón de estrategias para escalar esos muros que sin duda nos encontraremos. Todo lo aprendido me aporta mucha seguridad en lo que hago, y eso desde luego se ve reflejado en la calidad de mi código. Yo desde luego las recomiendo y pienso aprovecharlas al máximo el tiempo que duren.`,
  },
  {
    name: "Paco",
    text: `Gracias a ellos conseguí mi primer trabajo debido a consejos que nos dieron, sin esas mentorías iniciales, no hubiera sido posible en absoluto. He tenido alguna charla con ellos privadamente en la que me han ayudado a tomar decisiones como personas con mas experiencia, y es algo que me ha ayudado y agradezco mucho, sin duda una luz guía que hace mucha falta en un sector que parece ser tan oscuro.`,
  },
  {
    name: "JaviStark",
    text: `El entorno tan seguro que se ha creado en el grupo nos da libertad para mostrar y lucir nuestros errores con la certeza de que no se nos juzgará y de que serán la mejor herramienta para aprender de forma colectiva. Seguramente sea este uno de los puntos más importantes y que hacen Gamedev Crafters uno de los mejores lugares donde podríamos crecer como profesionales.`,
  },
  {
    name: "Adrián",
    text: `Los mentores tienen mucha experiencia de campo, un profundo entendimiento de los conceptos y una gran dedicación dentro de su disponibilidad. Con una mayor dedicación se nos podría dar una enseñanza más personalizada, acoger más grupos que aumenten la variedad y la participación de la comunidad u organizar más proyectos con una supervisión más activa y planificada.`,
  },
  {
    name: "JaviStark",
    text: `Estaré siempre agradecido a esta oportunidad y a las personas que están siempre ahí para apoyarnos de forma desinteresada y guiarnos en nuestra carrera profesional tanto desde la parte técnica como desde la parte más humana, de comunicación, trabajo en equipo y comunidad.`,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Praises() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  function go(newIndex: number) {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  }

  function prev() {
    go(current === 0 ? praises.length - 1 : current - 1);
  }

  function next() {
    go(current === praises.length - 1 ? 0 : current + 1);
  }

  const praise = praises[current];

  return (
    <section id="praises" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            ¿
          </h2>
        </ScrollReveal>

        <div className="mt-16 relative">
          {/* Carrusel */}
          <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="p-8"
              >
                <blockquote className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {praise.text}
                </blockquote>
                <p className="mt-6 font-semibold text-gray-900">
                  — {praise.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores de posición */}
            <div className="flex gap-2">
              {praises.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                    i === current ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
