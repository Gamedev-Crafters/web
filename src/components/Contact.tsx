import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contacta con nosotres
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            La comunidad funciona en un Discord privado al que se da acceso a
            cada nueva generación. Si quieres saber más o formar parte de la
            próxima, escríbenos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gamedevcrafters@gmail.com"
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
            >
              Escríbenos
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
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
