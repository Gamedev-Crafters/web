import ScrollReveal from "./ScrollReveal";

const details = [
  "Funcionamos en un Discord privado y cerrado",
  "Se da acceso al entrar en una nueva generación",
  "Escríbenos si quieres saber más o formar parte de la próxima",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contacta con nosotres
          </h2>
        </ScrollReveal>

        <ul className="mt-10 space-y-4 text-left max-w-md mx-auto">
          {details.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <li className="flex gap-3 items-start text-lg text-gray-600">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                {item}
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gamedevcrafters@gmail.com"
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
            >
              Escríbenos
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/r-g-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn de Ricardo
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-moreno-garc%C3%ADa-fresneda-9004981bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn de Iván
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
