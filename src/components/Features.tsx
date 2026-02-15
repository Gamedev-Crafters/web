import ScrollReveal from "./ScrollReveal";

const generationModel = [
  "Cada cierto tiempo entra una nueva generación",
  "Mentorizada por quienes ya llevan camino recorrido",
  "Es natural que algunas personas entren y otras salgan",
  "Eso forma parte del proceso",
];

const generations = [
  {
    name: "Generación 0",
    label: "Fundadores",
    members: ["Ricardo", "Iván", "Ángel"],
    note: "Quienes arrancaron la comunidad desde cero.",
  },
  {
    name: "Generación 1",
    label: "Más de 35 personas",
    members: ["Adrián", "Fran", "Geri", "Javi", "Juan", "Dani"],
    note: "La primera gran remesa. Quienes siguen actives a día de hoy.",
  },
  {
    name: "Generación 2",
    label: "Mentorizada por Gen 1",
    members: ["Katia", "Joser", "Luna", "Samu"],
    note: "Mentorizada íntegramente por miembres que antes fueron mentorizades.",
  },
  {
    name: "Generación 3",
    label: "En curso",
    members: [],
    note: "Recién incorporada, mentorizada por Gen 1 + Gen 2. El ciclo continúa.",
  },
];

export default function Features() {
  return (
    <section id="generations" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Generaciones
          </h2>
        </ScrollReveal>

        <ul className="mt-10 max-w-2xl mx-auto space-y-4">
          {generationModel.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <li className="flex gap-3 items-start text-lg text-gray-600">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                {item}
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <div className="mt-16 space-y-8">
          {generations.map((gen, i) => (
            <ScrollReveal key={gen.name} delay={0.1 * i}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-semibold rounded-full w-fit">
                    {gen.name}
                  </span>
                  <span className="text-sm text-gray-500">{gen.label}</span>
                </div>
                <p className="mt-3 text-gray-600">{gen.note}</p>
                {gen.members.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {gen.members.map((member) => (
                      <span
                        key={member}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
