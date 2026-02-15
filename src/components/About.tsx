import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="philosophy" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Nuestra filosofía
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-lg text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
            Somos una comunidad que acerca la ingeniería de software a la
            programación de videojuegos. Sin jerarquías, sin dogmas, sin
            aprendizaje forzado. Un espacio seguro donde crecer juntes.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Mentorías circulares",
              desc: "Quienes más aprenden son quienes enseñan. No hay profes ni alumnes: todes aprendemos de todes.",
            },
            {
              title: "Espacio seguro",
              desc: "Sin juicios ni competitividad tóxica. Cada persona avanza a su ritmo, con apoyo del grupo.",
            },
            {
              title: "Pragmatismo",
              desc: "Aprender haciendo. Nada de teoría hueca: proyectos reales, feedback real, crecimiento real.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 * i}>
              <div className="p-6 rounded-2xl bg-gray-50 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
