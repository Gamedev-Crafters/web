import ScrollReveal from "./ScrollReveal";

interface Member {
  name: string;
  image?: string; // URL de la imagen. Si no se pone, usa avatar por defecto.
  link?: string;  // URL al perfil (LinkedIn, Bluesky, etc.)
}

const PLACEHOLDER_LINK = "#";

const generationModel = [
  "Cada cierto tiempo entra una nueva generación",
  "La última generación pasa a ser mentora de la siguiente",
  "Es natural que algunas personas entren y otras salgan",
  "No hay compromiso, solo ganas de aprender y compartir",
];

const generations: {
  name: string;
  label: string;
  members: Member[];
  note: string;
  color: string; // Color del rol en Discord
}[] = [
  {
    name: "Generación 0",
    label: "Fundadores",
    color: "#e0a815",
    members: [
      { name: "Ricardo", link: "https://www.linkedin.com/in/r-g-v/" },
      { name: "Iván", link: "https://www.linkedin.com/in/iv%C3%A1n-moreno-garc%C3%ADa-fresneda-9004981bb" },
      { name: "Ángel", link: PLACEHOLDER_LINK },
    ],
    note: "Quienes arrancaron la comunidad.",
  },
  {
    name: "Generación 1",
    label: "Más de 35 personas | Mentorizada por Gen 0",
    color: "#3b82f6",
    members: [
      { name: "Adrián", link: PLACEHOLDER_LINK },
      { name: "Fran", link: PLACEHOLDER_LINK },
      { name: "Geri", link: PLACEHOLDER_LINK },
      { name: "Javi", link: PLACEHOLDER_LINK },
      { name: "Juan", link: PLACEHOLDER_LINK },
      { name: "Dani", link: PLACEHOLDER_LINK },
    ],
    note: "Gente diversa de muchos backgrounds. Siguen actives a día de hoy:",
  },
  {
    name: "Generación 2",
    label: "Buscada a demanda | Mentorizada por Gen 1",
    color: "#a855f7",
    members: [
      { name: "Katia", link: PLACEHOLDER_LINK },
      { name: "Joser", link: PLACEHOLDER_LINK },
      { name: "Luna", link: PLACEHOLDER_LINK },
      { name: "Samu", link: PLACEHOLDER_LINK },
    ],
    note: "Gente con bastante experiencia profesional anterior. Siguen:",
  },
  {
    name: "Generación 3",
    label: "En curso | Mentorizada por Gen 1 + Gen 2",
    color: "#22c55e",
    members: [],
    note: "Última incorporación de gente diversa, sobre todo sin mucha experiencia laboral.",
  },
];

// Avatar SVG por defecto: silueta genérica.
// Se usa cuando el miembro no tiene imagen propia.
function DefaultAvatar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#e5e7eb" />
      <circle cx="20" cy="16" r="7" fill="#9ca3af" />
      <ellipse cx="20" cy="34" rx="12" ry="10" fill="#9ca3af" />
    </svg>
  );
}

function MemberChip({ member }: { member: Member }) {
  const content = (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <DefaultAvatar className="w-6 h-6" />
      )}
      {member.name}
    </span>
  );

  if (member.link && member.link !== "#") {
    return (
      <a href={member.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

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
                  <span
                    className="inline-block px-3 py-1 text-white text-sm font-semibold rounded-full w-fit"
                    style={{ backgroundColor: gen.color }}
                  >
                    {gen.name}
                  </span>
                  <span className="text-sm text-gray-500">{gen.label}</span>
                </div>
                <p className="mt-3 text-gray-600">{gen.note}</p>
                {gen.members.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {gen.members.map((member) => (
                      <MemberChip key={member.name} member={member} />
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
