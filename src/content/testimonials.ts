export interface Testimonial {
  name: string;
  role: string;
  company: string;
  relation: { es: string; en: string };
  date: string;
  quote: { es: string; en: string };
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Tamara Benitez",
    role: "Backend Engineer",
    company: "Cloud & Distributed Systems",
    initials: "TB",
    date: "Enero 2026",
    relation: {
      es: "Supervisó directamente a Lucio",
      en: "Directly supervised Lucio",
    },
    quote: {
      es: "Tuve la oportunidad de trabajar con Lucio y destaco especialmente su compromiso con el equipo y la calidad del trabajo. Siempre está atento a si algún compañero necesita ayuda, mostrando una actitud colaborativa y muy buena predisposición. Además, es una persona que busca constantemente mejorar el código, aportando buenas prácticas y cuidando los detalles. Es súper responsable, se comunica de manera clara y efectiva, y cumple con sus tareas de forma consistente. Sin dudas, Lucio es un profesional que suma valor tanto a nivel técnico como humano en cualquier equipo de trabajo.",
      en: "I had the opportunity to work with Lucio and I particularly highlight his commitment to the team and the quality of the work. He is always attentive to whether a colleague needs help, showing a collaborative attitude and great willingness. He constantly seeks to improve the code, bringing best practices and caring about the details. He is super responsible, communicates clearly and effectively, and delivers consistently. Without a doubt, Lucio is a professional who adds value both technically and as a person in any team.",
    },
  },
  {
    name: "Valeria Medina",
    role: "Full Stack Developer",
    company: "ForIT Software Factory",
    initials: "VM",
    date: "Abril 2026",
    relation: {
      es: "Trabajaron juntos en AMIA",
      en: "Worked together at AMIA",
    },
    quote: {
      es: "Tuve la oportunidad de trabajar con Lucio en AMIA, un proyecto de ForIT. Es un compañero de equipo muy atento a los detalles, con una gran capacidad para la resolución de problemas técnicos. Además, se destaca por sus habilidades de comunicación y su calidez como persona, lo que genera un ambiente de trabajo muy positivo. Sin duda, es un profesional valioso para cualquier equipo.",
      en: "I had the opportunity to work with Lucio at AMIA, a ForIT project. He is a teammate who is very attentive to detail, with a great capacity for solving technical problems. He also stands out for his communication skills and warmth as a person, which creates a very positive work environment. He is undoubtedly a valuable professional for any team.",
    },
  },
  {
    name: "Nicolas Filippelli",
    role: "Fullstack Engineer",
    company: "Nomu Labs",
    initials: "NF",
    date: "Abril 2026",
    relation: {
      es: "Trabajaron juntos en el mismo equipo",
      en: "Worked together on the same team",
    },
    quote: {
      es: "Trabajé junto a Lucio y lo que más destaco de él es su dedicación genuina para crecer profesionalmente. Siempre con ganas de aprender y mejorar, es de esas personas que no dejan pasar ninguna oportunidad para dar un paso más. Su buena comunicación y su iniciativa lo convierten en alguien valioso para cualquier equipo que busque personas comprometidas de verdad.",
      en: "I worked alongside Lucio and what I highlight most is his genuine dedication to professional growth. Always eager to learn and improve, he is one of those people who never misses an opportunity to go one step further. His good communication and initiative make him valuable for any team looking for truly committed people.",
    },
  },
  {
    name: "Matías Chacón",
    role: "Full Stack Web Developer",
    company: "ForIT",
    initials: "MC",
    date: "Marzo 2026",
    relation: {
      es: "Trabajaron juntos en ForIT",
      en: "Worked together at ForIT",
    },
    quote: {
      es: "Trabajé con Lucio en un proyecto de ForIT y no solo es un muy buen desarrollador sino que es un gran compañero. Resolvió tareas de alta complejidad y siempre está atento a las necesidades del equipo para resolver dudas y acompañar.",
      en: "I worked with Lucio on a ForIT project and he is not only a very good developer but also a great teammate. He tackled highly complex tasks and is always attentive to the team's needs, resolving doubts and providing support.",
    },
  },
  {
    name: "Alejandro Verduguez Vidal",
    role: "Desarrollador Web FullStack",
    company: "ForIT",
    initials: "AV",
    date: "Marzo 2026",
    relation: {
      es: "Trabajaron juntos en el mismo equipo",
      en: "Worked together on the same team",
    },
    quote: {
      es: "Tuve la oportunidad de trabajar con él en un proyecto y la experiencia fue muy positiva. Es un compañero altamente competente, con un muy buen nivel de independencia a la hora de encarar tareas y resolver problemas. Algo que destaco especialmente es su capacidad para tomar decisiones alineadas al proyecto, lo que aporta mucho valor al equipo. Siempre está dispuesto a ayudar, lo que genera un ambiente colaborativo y de confianza. Sin duda, es alguien con quien volvería a trabajar.",
      en: "I had the opportunity to work with him on a project and the experience was very positive. He is a highly competent colleague, with a great level of independence when tackling tasks and solving problems. What I particularly highlight is his ability to make decisions aligned with the project, which adds a lot of value to the team. He is always willing to help, creating a collaborative and trusting environment. He is undoubtedly someone I would work with again.",
    },
  },
  {
    name: "Alex Pumari Diaz",
    role: "Desarrollador Full Stack",
    company: "ForIT",
    initials: "AP",
    date: "Marzo 2026",
    relation: {
      es: "Trabajaron juntos en el mismo equipo",
      en: "Worked together on the same team",
    },
    quote: {
      es: "Tuve la oportunidad de trabajar con Lucio en un proyecto complejo. Desde el inicio me orientó y siempre estuvo dispuesto a ayudar. Es proactivo, analítico y comunica muy bien, lo que hace que colaborar con él sea muy fácil.",
      en: "I had the opportunity to work with Lucio on a complex project. From the start he guided me and was always willing to help. He is proactive, analytical and communicates very well, which makes collaborating with him very easy.",
    },
  },
  {
    name: "Joel Alexander Trinidad",
    role: "Fullstack Developer",
    company: "Nomu Labs",
    initials: "JT",
    date: "Febrero 2026",
    relation: {
      es: "Trabajaron juntos en el mismo equipo",
      en: "Worked together on the same team",
    },
    quote: {
      es: "Tuve la oportunidad de trabajar con Lucio, tiene una excelente capacidad de análisis, es muy asertivo, y siempre está aprendiendo y creciendo no solo técnicamente sino personalmente. También ha demostrado que es capaz de ser resolutivo y comunicativo, es una persona agradable para trabajar.",
      en: "I had the opportunity to work with Lucio. He has an excellent analytical capacity, is very assertive, and is always learning and growing not only technically but personally. He has also shown that he can be decisive and communicative — he is a very pleasant person to work with.",
    },
  },
  {
    name: "Martina Moyano",
    role: "Desarrolladora Web Junior",
    company: "ForIT",
    initials: "MM",
    date: "Febrero 2026",
    relation: {
      es: "Trabajaron juntos en el mismo equipo",
      en: "Worked together on the same team",
    },
    quote: {
      es: "Conocí a Lucio cuando me sumé a un proyecto que ya llevaba bastante tiempo en desarrollo. Desde el primer momento se mostró predispuesto a ayudarme, tuvo paciencia para explicarme el contexto del proyecto, responder mis dudas y orientarme cuando lo requerí. Su disposición para colaborar y compartir conocimiento hizo que mi proceso de incorporación fuera mucho más simple y llevadero. Es un excelente compañero de equipo, comprometido y siempre dispuesto a dar una mano.",
      en: "I met Lucio when I joined a project that had been in development for a long time. From the very beginning he was willing to help me, patiently explaining the project context, answering my questions and guiding me when needed. His willingness to collaborate and share knowledge made my onboarding process much simpler and smoother. He is an excellent teammate, committed and always ready to lend a hand.",
    },
  },
  {
    name: "Lucas Motta",
    role: "Full Stack Developer",
    company: "ForIT",
    initials: "LM",
    date: "Diciembre 2025",
    relation: {
      es: "Trabajan juntos actualmente",
      en: "Currently working together",
    },
    quote: {
      es: "Actualmente trabajo con Lucio, y es una persona a quien siempre le puedo pedir ayuda, y está dispuesto a aprender. Desde el inicio fue una persona que marcó un camino, siempre yendo por más, y tomando desafíos que le han hecho crecer muchísimo en su camino como profesional. Amable, correcto y simpático, es un compañero con quien disfruto trabajar día a día, y sin dudas recomendaría ante cualquier situación.",
      en: "I currently work with Lucio, and he is someone I can always ask for help, always willing to learn. From the start he set a path, always going for more and taking on challenges that have helped him grow enormously as a professional. Kind, upright and personable, he is a teammate I enjoy working with every day, and I would recommend him without hesitation.",
    },
  },
  {
    name: "Alexandro Lucero",
    role: "Full Stack Developer",
    company: "ForIT",
    initials: "AL",
    date: "Octubre 2025",
    relation: {
      es: "Trabajaron juntos en AMIA (ForIT)",
      en: "Worked together at AMIA (ForIT)",
    },
    quote: {
      es: "Tuve la oportunidad de trabajar con Lucio en el proyecto AMIA dentro de ForIT. Ingresamos al equipo casi al mismo tiempo, y desde el inicio supimos apoyarnos mutuamente. Lucio demostró ser un profesional comprometido, responsable y con muy buenas habilidades técnicas y de trabajo en equipo. Se destacó por su capacidad para resolver problemas de forma eficiente, su colaboración constante y su orientación a los resultados. Sin dudas, recomiendo a Lucio para cualquier desafío profesional que emprenda.",
      en: "I had the opportunity to work with Lucio on the AMIA project at ForIT. We joined the team at almost the same time and from the start we supported each other. Lucio proved to be a committed, responsible professional with very good technical and teamwork skills. He stood out for his ability to solve problems efficiently, his constant collaboration and his results-oriented mindset. I would definitely recommend Lucio for any professional challenge he takes on.",
    },
  },
  {
    name: "Sofia Escobar",
    role: "Desarrolladora Fullstack",
    company: "ForIT",
    initials: "SE",
    date: "Septiembre 2025",
    relation: {
      es: "Trabajaron juntos en el mismo equipo",
      en: "Worked together on the same team",
    },
    quote: {
      es: "Tuve la oportunidad de compartir con Lucio, y fue un verdadero placer trabajar junto a él. Desde el primer día se destacó por su predisposición y compromiso, siempre participando activamente en las reuniones y aportando ideas claras que sumaban al trabajo en equipo. Lucio tiene una gran capacidad para escuchar, colaborar y encontrar soluciones de manera conjunta. Su actitud abierta y su amabilidad constante contribuyeron a que el grupo funcionara de manera organizada y productiva.",
      en: "I had the opportunity to work alongside Lucio, and it was a real pleasure. From day one he stood out for his willingness and commitment, always actively participating in meetings and contributing clear ideas that added value to the team. Lucio has a great capacity to listen, collaborate and find solutions together. His open attitude and constant kindness contributed to the group working in an organized and productive way.",
    },
  },
  {
    name: "Ricardina Zabala",
    role: "Fullstack Developer",
    company: "Nomu Labs",
    initials: "RZ",
    date: "Diciembre 2025",
    relation: {
      es: "Proyecto AMIA, equipos distintos",
      en: "AMIA project, different teams",
    },
    quote: {
      es: "Conocí a Lucio en el proyecto AMIA. Si bien nuestro tiempo de trabajo en equipo fue corto, se destacó como un muy buen compañero con una actitud respetuosa dentro del equipo.",
      en: "I met Lucio on the AMIA project. Although our time working together was short, he stood out as a very good colleague with a respectful attitude within the team.",
    },
  },
  {
    name: "Yael Correa",
    role: "Full Stack Developer",
    company: "ForIT",
    initials: "YC",
    date: "Diciembre 2025",
    relation: {
      es: "Trabajaron juntos, equipos distintos",
      en: "Worked together, different teams",
    },
    quote: {
      es: "Trabajando con Lucio destaco su inteligencia emocional. También su responsabilidad y la constancia con la que encara todo es algo de admirar cada día. Es alguien comprometido, confiable y muy dedicado a lo que se propone, y esto influye en sus pares de forma positiva.",
      en: "Working with Lucio I highlight his emotional intelligence. His responsibility and the consistency with which he approaches everything is something to admire every day. He is committed, reliable and very dedicated to what he sets out to do, and this positively influences those around him.",
    },
  },
  {
    name: "Maria Belen Pileci",
    role: "Developer & Data Analytics",
    company: "ForIT",
    initials: "MP",
    date: "Diciembre 2025",
    relation: {
      es: "Colaboraron en ForIT",
      en: "Collaborated at ForIT",
    },
    quote: {
      es: "Tuve la oportunidad de conocer a Lucio en ForIT. Más allá de sus sólidas competencias como Desarrollador Full Stack, pude apreciar su gran desempeño en habilidades interpersonales. Es una persona comprometida, con objetivos claros y un gran entusiasmo no solo para la solución efectiva de problemas, sino a la hora de ayudar a un compañero. Tiene una gran capacidad de escucha activa integrando feedback con humildad y empatía. La combinación de talento técnico, actitud proactiva y trato humano lo convierte en un profesional excepcional para cualquier equipo de trabajo.",
      en: "I had the opportunity to meet Lucio at ForIT. Beyond his solid skills as a Full Stack Developer, I could appreciate his outstanding interpersonal abilities. He is a committed person with clear goals and great enthusiasm not only for effectively solving problems, but also for helping teammates. He has a great capacity for active listening, integrating feedback with humility and empathy. The combination of technical talent, proactive attitude and human warmth makes him an exceptional professional for any team.",
    },
  },
];
