import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Praise {
  name: string;
  highlight: string; // Frase clave que se muestra siempre
  full: string;      // Texto completo, expandible
}

const praises: Praise[] = [
  {
    name: "JaviStark",
    highlight:
      "Las mentorías han sido un cambio total de mentalidad.",
    full: `Para mí las mentorías han sido un cambio total de mentalidad. Desde hace años que soy autodidacta y todos los conocimientos que adquiría formaban una amalgama de datos de diversidad de fuentes que no necesariamente eran coherentes entre sí y no estaban contrastados. Llegar a las mentorías me ha abierto la oportunidad de debatir cantidad de temas, de realizar lecturas que han asentado las pocas cosas que sabía y me ha surtido de conocimientos, metodologías y prácticas que no sabía que tenía que aprender, porque son cosas que para alguien autodidacta pasan absolutamente por debajo del radar porque no tenemos forma de saber siquiera que existen.

Al entrar en la universidad lo he hecho con un criterio y un punto de vista madurado por estas mentorías. Me han empoderado para recibir las enseñanzas académicas no solo como contenidos que se plasman en un examen sino como conocimiento que realmente tendrá un impacto en mi futuro como desarrollador, ya que se han construido sobre lecturas y experiencias que no podría haber adquirido en ningún otro lugar que no fuera Gamedev Crafters.

Además, el entorno tan seguro que se ha creado en el grupo nos da libertad para mostrar y lucir nuestros errores con la certeza de que no se nos juzgará y de que serán la mejor herramienta para aprender de forma colectiva. Seguramente sea este uno de los puntos más importantes y que hacen Gamedev Crafters uno de los mejores lugares donde podríamos crecer como profesionales.

Estaré siempre agradecido a esta oportunidad y a las personas que están siempre ahí para apoyarnos de forma desinteresada y guiarnos en nuestra carrera profesional tanto desde la parte técnica como desde la parte más humana, de comunicación, trabajo en equipo y comunidad.`,
  },
  {
    name: "Javi de Dueñas",
    highlight:
      "Me han ayudado mucho a dirigir mi desarrollo profesional con el enfoque adecuado.",
    full: `Las mentorías de Gamedev Crafters son estupendas. Me han ayudado mucho a dirigir mi desarrollo profesional como ingeniero de software con el enfoque adecuado, y desde el primer día la integración en el grupo ha sido excelente. Se realizan muchas actividades formativas de las que siempre se aprende y se saca algo nuevo gracias también a que el caché de los mentores es muy bueno. Además, hay un ambiente de colaboración entre los grupos de las mentorías excepcional, que juntado con la diversidad de perspectivas enriquecen muchísimo.`,
  },
  {
    name: "Adrián",
    highlight:
      "Hemos podido aprender y aplicar de manera práctica conceptos de gran importancia para la sostenibilidad y eficiencia del software.",
    full: `En las mentorías hemos hecho sesiones de programación, proyectos en equipo y discusiones sobre literatura especializada, y hemos podido aprender y aplicar de manera práctica conceptos de diseño y desarrollo de software de gran importancia para su sostenibilidad y eficiencia. Por desgracia estas prácticas son muy desconocidas en la indústria de videojuegos, en la que he encontrado poca oferta formativa de calidad.

Los mentores tienen mucha experincia de campo, un profundo entendimiento de los conceptos y una gran dedicación dentro de su disponibilidad. Sin embargo, las mentorías se resienten de la falta de recursos: con una mayor dedicación se nos podría dar una enseñanza más personalizada, acoger más grupos que aumenten la variedad y la participación de la comunidad u organizar más proyectos con una supervisión más activa y planificada.`,
  },
  {
    name: "Ismael",
    highlight:
      "En muy poco tiempo he conseguido progresar enormemente en mi carrera como programador.",
    full: `Durante los últimos 8 meses, he formado parte del grupo de mentoría Gamedev Crafter, donde junto a otros compañeros he profundizado en programación y buenas prácticas, como arquitectura y metodologías. Estoy realmente feliz y a gusto de trabajar en este grupo, porque en muy poco tiempo he conseguido progresar enormemente en mi carrera como programador.

La dedicación de Ángel, Iván y Ricardo, los organizadores del grupo, es excepcional; no solo comparten su enorme conocimiento, sino que también tienen una gran habilidad para explicar conceptos complejos de manera accesible, cosa que considero muy importante. Además, es un placer trabajar con ellos porque son personas muy atentas, amables, responsables y sacrificadas.

Creo que obtener una subvención para el grupo sería una oportunidad fantástica para mejorar aún más la mentoría, permitiéndoles dedicar más tiempo, aumentar los recursos disponibles, y alcanzar a más desarrolladores interesados en impulsar su carrera.

Estoy muy agradecido por haber encontrado este grupo y por la oportunidad de conocer a personas increíbles. Espero que sigan ayudando a otros como lo han hecho conmigo.`,
  },
  {
    name: "Paco",
    highlight:
      "He aprendido más en las mentorías que en el último año haciendo proyectos solo por mi cuenta. Gracias a ellos conseguí mi primer trabajo.",
    full: `Quiero compartir lo increíble que ha sido mi experiencia con las tutorías de Gamedev Crafters.

Nos guían en como programar, nos enseñan sus mejores prácticas, cosas de profesionales que llevan años en la industria que no aprendes hasta que pasan años de tu carrera, y que incluso algunos profesionales del sector, no saben hacer.

Ojalá todo el mundo pueda tener unas mentorías como a las que nos dan acceso, he aprendido mas en ellas que probablemente en el ultimo año haciendo proyectos de Unity solo por mi cuenta, o en lo que llevo en mi trabajo. De programación, y como persona. Gracias a ellos conseguí mi primer trabajo debido a consejos que nos dieron, sin esas mentorías iniciales, no hubiera sido posible en absoluto.

No solo eso, nos han enseñado recursos como libros que leer, quedamos para comentarlos y ver que hemos aprendido, artículos, vídeos y otros contenidos, también yo he tenido alguna charla con ellos privadamente en la que me han ayudado a tomar decisiones como personas con mas experiencia, y es algo que me ha ayudado y agradezco mucho, sin duda una luz guía que hace mucha falta en un sector que parece ser tan oscuro.`,
  },
  {
    name: "Fran",
    highlight:
      "He aprendido mucho más que durante los 2 años de formación en programación previos.",
    full: `Durante los 6 meses que he estado participando en las mentorías de Gamedev Crafters he aprendido mucho más que durante los 2 años de formación en programación previos. Creo que uno de los grandes problemas de los programadores novatos es que, después de enseñarte las herramientas básicas de programación, nadie te aporta ningún tipo de estructura, andamiaje o principios para afrontar tu nuevo trabajo. Si tienes suerte, un perfil senior te enseñará a solucionar problemas concretos a su manera, y te dará una serie de principios dogmáticos de programación, que además serán diferentes si le preguntas a otro senior. Se espera que aprendamos a base de seguir ordenes de gente que sabe más y de pegarnos cabezazos contra el muro de turno.

Por eso valoro tanto lo aprendido durante estas mentorías, porque más que ayudarnos a superar muros concretos, nos han enseñado una serie de herramientas para afrontar cualquier obstáculo que se nos presente. En lugar de darnos un martillo dorado que no existe para derribar un muro, nos han dado un montón de estrategias para escalar esos muros que sin duda nos encontraremos. Personalmente, creo que lo mejor que me han aportado estas sesiones tiene que ver con como afronto una terea de programación nueva. Antes dedicaba mucho tiempo a pensar como plantearla, con la constante incertidumbre (por falta de experiencia) de si estaba haciendo alguna locura que pudiera pasarme factura mas adelante. Ahora, tengo suficientes herramientas como para ponerme a trabajar en una nueva tarea tranquilamente, sabiendo que voy a encontrar problemas por el camino y que voy a encontrar la mejor solución a esos problemas sobre la marcha. Todo lo aprendido me aporta mucha seguridad en lo que hago, y eso desde luego se ve reflejado en la calidad de mi código.

Como posibilidades de mejora de cara al futuro, estas sesiones tienen las desventajas propias de las actividades organizadas de manera "informal": dependen mucho de la implicación de los participantes (que no es poca dado que seguimos teniendo sesiones seis meses después de su comienzo). Quizá si el grupo se convirtiera en recurso educativo más formal aportaría sesiones y horarios mas estructurados para aquellos que quieran sacar el máximo partido a estas actividades y que puedan tener dificultades para adaptar sus horarios. Seguramente así podría llegar a más gente y a la larga estoy seguro de que formaría a grandes profesionales en el ámbito de la programación.

Yo desde luego las recomiendo y pienso aprovecharlas al máximo el tiempo que duren.`,
  },
];

function PraiseCard({ praise }: { praise: Praise }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-100">
      <p className="text-gray-900 font-medium italic">"{praise.highlight}"</p>

      {expanded && (
        <div className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line text-sm">
          {praise.full}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">
          — {praise.name}
        </span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          {expanded ? "Leer menos" : "Leer más"}
        </button>
      </div>
    </div>
  );
}

export default function Praises() {
  return (
    <section id="praises" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Lo que dicen quienes han pasado por aquí
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {praises.map((praise, i) => (
            <ScrollReveal key={praise.name} delay={0.1 * i}>
              <PraiseCard praise={praise} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
