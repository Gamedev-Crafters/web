import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Únete a la comunidad
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            ¿Quieres formar parte? Escríbenos y te contamos cómo unirte.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="mailto:hola@gamedevcrafters.com"
            className="inline-block mt-8 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
          >
            Contáctanos
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
