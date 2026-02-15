import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Meetups y eventos",
    desc: "Encuentros regulares para hablar de game dev, mostrar proyectos y aprender juntos.",
  },
  {
    title: "Game Jams",
    desc: "Jams internas donde creamos juegos en tiempo récord. La mejor forma de aprender haciendo.",
  },
  {
    title: "Recursos compartidos",
    desc: "Biblioteca de tutoriales, herramientas y assets curada por la comunidad.",
  },
  {
    title: "Feedback y playtesting",
    desc: "Comparte tus prototipos y recibe feedback honesto de otros desarrolladores.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Qué hacemos
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-12">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.1 * i}>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
