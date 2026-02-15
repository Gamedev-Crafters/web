import ScrollReveal from "./ScrollReveal";

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
    note: "La primera gran remesa. De más de 35 personas, quienes siguen activos a día de hoy.",
  },
  {
    name: "Generación 2",
    label: "Mentorizada por Gen 1",
    members: ["Katia", "Joser", "Luna", "Samu"],
    note: "La primera generación mentorizada íntegramente por miembros que antes fueron mentorizados.",
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

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Funcionamos por generaciones. Cada cierto tiempo entra gente nueva,
            mentorizada por quienes ya llevan camino recorrido. Es natural que
            algunas personas entren y otras salgan por motivos personales o
            profesionales: eso forma parte del proceso.
          </p>
        </ScrollReveal>

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
