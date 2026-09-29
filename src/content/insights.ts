export type InsightPost = {
  slug: string;
  date: string;
  readingTime: number;
  tags: string[];
  title: { es: string; en: string };
  summary: { es: string; en: string };
  body: { es: string; en: string };
};

export const insights: InsightPost[] = [
  {
    slug: "tdd-react-ciclos-red-green-refactor",
    date: "2026-03-18",
    readingTime: 4,
    tags: ["TDD", "React", "Testing", "Vitest"],
    title: {
      es: "TDD en proyectos React: ciclos red-green-refactor en producción",
      en: "TDD in React projects: red-green-refactor cycles in production",
    },
    summary: {
      es: "Cómo aplicar el ciclo TDD real cuando testeás hooks, componentes con comportamiento y módulos externos.",
      en: "How to apply the real TDD cycle when testing hooks, behavioural components and external modules.",
    },
    body: {
      es: `El error más común al intentar TDD en React es empezar a testear la implementación en lugar del comportamiento. Un test que verifica que un hook llama a setState internamente no prueba nada útil; uno que verifica que dado un click el valor cambia en pantalla, sí.

El ciclo funciona así: escribís primero el test que describe la expectativa del usuario o del sistema (rojo). Luego escribís el código mínimo para que pase (verde). Después refactorizás con confianza porque tenés cobertura real.

Para hooks custom, la regla es testearlo a través de un componente pequeño o usar renderHook de @testing-library/react. Si tenés un useCart que calcula el total, el test escribe algo como renderHook(() => useCart()) y verifica act(() => result.current.addItem(item)) cambia result.current.total.

El mocking de módulos externos es donde más se rompe la disciplina. En AMIA usábamos vi.mock() de Vitest a nivel de módulo para dependencias de infraestructura (clientes HTTP, repositorios), pero nunca mockeábamos utilidades propias de dominio. La frontera del mock tiene que coincidir con la frontera de la arquitectura.

Para componentes con comportamiento complejo —formularios, flujos multi-step— la estrategia que más rindió fue escribir los tests de integración antes que los unitarios. Primero verificás el flujo completo con userEvent.type y userEvent.click, luego los casos edge. Eso también sirve como documentación viva del feature.`,
      en: `The most common mistake when trying TDD in React is testing implementation details instead of behaviour. A test that checks a hook calls setState internally proves nothing useful; one that verifies a click changes the value on screen, does.

The cycle works like this: first write the test describing the user or system expectation (red). Then write the minimum code to make it pass (green). Then refactor with confidence because you have real coverage.

For custom hooks, the rule is to test through a small component or use renderHook from @testing-library/react. If you have a useCart that computes a total, the test writes something like renderHook(() => useCart()) and verifies that act(() => result.current.addItem(item)) changes result.current.total.

Mocking external modules is where discipline tends to break down. At AMIA we used Vitest's vi.mock() at module level for infrastructure dependencies (HTTP clients, repositories), but never mocked our own domain utilities. The mock boundary must align with the architecture boundary.

For components with complex behaviour—forms, multi-step flows—the strategy that paid off most was writing integration tests before unit tests. First verify the full flow with userEvent.type and userEvent.click, then edge cases. This also doubles as living documentation for the feature.`,
    },
  },
  {
    slug: "monorepo-multi-tenant-amia",
    date: "2026-01-20",
    readingTime: 4,
    tags: ["Node.js", "Monorepo", "Multi-tenant", "Yarn Workspaces"],
    title: {
      es: "Monorepo multi-tenant en Node.js: lo que aprendí en AMIA",
      en: "Multi-tenant monorepo in Node.js: what I learned at AMIA",
    },
    summary: {
      es: "Decisiones reales sobre paquetes compartidos, instancias por cliente y trade-offs del monorepo.",
      en: "Real decisions about shared packages, per-client instances and monorepo trade-offs.",
    },
    body: {
      es: `En AMIA el desafío era un mismo producto que tenía que servir a varios clientes. La solución fue un monorepo con Yarn Workspaces: librerías compartidas de dominio, API y web, un paquete de dominio con los casos de uso del servicio de empleo, y apps separadas (API, web y un panel de administración) que importan desde esas capas.

En lugar de meter lógica condicional por cliente dentro del código, cada tenant es una instancia propia con su API, su web y su configuración. Un dominio aparte se encarga de administrar esas instancias: crearlas, actualizarlas, darlas de baja y registrarlas en el reverse proxy. Ese dominio es completamente independiente del de empleo, así que los dos evolucionan sin pisarse.

El trade-off más real del monorepo: un cambio de ruptura en una librería compartida se detecta en compilación en todas las apps a la vez. Eso es una ventaja enorme de mantenibilidad, pero te obliga a tener disciplina cuando tocás código compartido.

Lo que evitamos fue meter lógica de presentación en las capas compartidas. Ahí solo viven entidades, interfaces de servicios y casos de uso, todos testeados con Vitest. Cada app se encarga del formato de respuesta y la validación de entrada.

Hoy recomendaría este enfoque para cualquier producto que tenga que desplegarse para varios clientes con la mayor parte de la lógica en común.`,
      en: `At AMIA the challenge was a single product that had to serve several clients. The solution was a Yarn Workspaces monorepo: shared domain, API and web libraries, a domain package with the employment service use cases, and separate apps (API, web and an admin panel) importing from those layers.

Instead of adding per-client conditional logic inside the code, each tenant is its own instance with its own API, web and configuration. A separate domain manages those instances: creating, updating and removing them and registering them in the reverse proxy. That domain is fully independent from the employment one, so both evolve without stepping on each other.

The most real trade-off of the monorepo: a breaking change in a shared library shows up at compile time in every app at once. That's a huge maintainability win, but it forces discipline whenever you touch shared code.

What we avoided was putting presentation logic in the shared layers. They only hold entities, service interfaces and use cases, all tested with Vitest. Each app handles response formatting and input validation.

Today I'd recommend this approach for any product that has to be deployed for several clients with most of the logic in common.`,
    },
  },
  {
    slug: "clean-architecture-nodejs-dominio-infraestructura",
    date: "2025-11-12",
    readingTime: 4,
    tags: ["Clean Architecture", "Node.js", "Repository Pattern", "Testing"],
    title: {
      es: "Clean Architecture en Node.js: separar dominio de infraestructura",
      en: "Clean Architecture in Node.js: separating domain from infrastructure",
    },
    summary: {
      es: "Por qué el patrón repository y los use cases cambian la testabilidad y la mantenibilidad de un sistema Node.",
      en: "Why the repository pattern and use cases change testability and maintainability in a Node system.",
    },
    body: {
      es: `La razón concreta para separar dominio de infraestructura no es filosófica: es que te permite testear la lógica de negocio sin levantar una base de datos. Si tu caso de uso CreateOrder depende de un OrderRepository como interfaz, podés inyectarle un InMemoryOrderRepository en los tests y un PostgresOrderRepository en producción.

Un use case en esta arquitectura es una función o clase con una sola responsabilidad: orquestar llamadas a repositorios y ejecutar reglas de negocio. No sabe nada de Express, de HTTP ni de SQL. Recibe datos validados, hace su trabajo y devuelve un resultado o lanza un error de dominio.

El repository pattern formaliza esta idea: definís la interfaz en la capa de dominio (save, findById, findByStatus), y la implementación concreta vive en la capa de infraestructura. El dominio nunca importa desde infraestructura; la dependencia siempre va en la dirección opuesta.

El beneficio más tangible que vi en producción fue en los tests de regresión. Cuando tocábamos una regla de negocio, los tests fallaban exactamente donde debían. Cuando cambiábamos el ORM, los tests de dominio no se enteraban. Esa independencia reduce el tiempo de diagnóstico de bugs considerablemente.

La fricción inicial es real: hay más archivos, más interfaces. Pero es una deuda que se paga sola en el segundo mes de desarrollo cuando empezás a modificar features sin miedo.`,
      en: `The concrete reason to separate domain from infrastructure isn't philosophical: it lets you test business logic without spinning up a database. If your CreateOrder use case depends on an OrderRepository as an interface, you can inject an InMemoryOrderRepository in tests and a PostgresOrderRepository in production.

A use case in this architecture is a function or class with a single responsibility: orchestrate calls to repositories and execute business rules. It knows nothing about Express, HTTP or SQL. It receives validated data, does its job and returns a result or throws a domain error.

The repository pattern formalises this idea: you define the interface in the domain layer (save, findById, findByStatus), and the concrete implementation lives in the infrastructure layer. The domain never imports from infrastructure; the dependency always goes the other way.

The most tangible benefit I saw in production was in regression tests. When we touched a business rule, tests failed exactly where they should. When we changed the ORM, domain tests didn't notice. That independence reduces bug diagnosis time considerably.

The initial friction is real: more files, more interfaces. But it's a debt that pays for itself by the second month of development when you start modifying features without fear.`,
    },
  },
];
