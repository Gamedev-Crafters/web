import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Quiénes somos
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-lg text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
            Somos una comunidad apasionada por el desarrollo de videojuegos.
            Desde principiantes hasta veteranos, compartimos conocimiento,
            proyectos y la pasión por crear experiencias interactivas.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Aprende", desc: "Recursos, tutoriales y mentorías para crecer como game dev." },
            { title: "Crea", desc: "Game jams, proyectos colaborativos y feedback constructivo." },
            { title: "Comparte", desc: "Muestra tu trabajo, inspírate con el de otros y conecta." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 * i}>
              <div className="p-6 rounded-2xl bg-gray-50 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
