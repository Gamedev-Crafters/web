import ScrollReveal from "./ScrollReveal";

const pillars = [
  "Acercamos la ingeniería de software a la programación de videojuegos",
  "Sin dogmas, sin titulitis, sin humo, sin aprendizaje forzado",
  "Se intenta cultivar un espacio seguro e inclusivo",
  "Quienes más aprenden son quienes enseñan",
  "Todes aprendemos de todes",
];

export default function About() {
  return (
    <section id="philosophy" className="py-16 px-6 bg-white/40 backdrop-blur-xs">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            ¿Qué hacemos?
          </h2>
        </ScrollReveal>

        <ul className="mt-12 max-w-2xl mx-auto space-y-4">
          {pillars.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <li className="flex gap-3 items-start text-lg text-gray-600">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                {item}
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Mentorías circulares", desc: "Mentorizades devolverán el conocimiento mentorizando", color: "#3b82f6" },
            { title: "Espacio seguro", desc: "Cada persona avanza a su ritmo Jamás se permite juzgar.", color: "#a855f7" },
            { title: "Bookclub", desc: "Discusión colectiva de libros, artículos, vídeos...", color: "#22c55e" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 * i}>
              <div
                className="p-6 rounded-2xl border border-white/40 text-center"
                style={{ backgroundColor: `${item.color}18` }}
              >
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
