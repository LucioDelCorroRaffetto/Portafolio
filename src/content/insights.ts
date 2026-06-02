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
    date: "2024-11-10",
    readingTime: 4,
    tags: ["TDD", "React", "Testing", "Jest"],
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

El mocking de módulos externos es donde más se rompe la disciplina. En AMIA usábamos jest.mock() a nivel de módulo para dependencias de infraestructura (clientes HTTP, repositorios), pero nunca mockeábamos utilidades propias de dominio. La frontera del mock tiene que coincidir con la frontera de la arquitectura.

Para componentes con comportamiento complejo —formularios, flujos multi-step— la estrategia que más rindió fue escribir los tests de integración antes que los unitarios. Primero verificás el flujo completo con userEvent.type y userEvent.click, luego los casos edge. Eso también sirve como documentación viva del feature.`,
      en: `The most common mistake when trying TDD in React is testing implementation details instead of behaviour. A test that checks a hook calls setState internally proves nothing useful; one that verifies a click changes the value on screen, does.

The cycle works like this: first write the test describing the user or system expectation (red). Then write the minimum code to make it pass (green). Then refactor with confidence because you have real coverage.

For custom hooks, the rule is to test through a small component or use renderHook from @testing-library/react. If you have a useCart that computes a total, the test writes something like renderHook(() => useCart()) and verifies that act(() => result.current.addItem(item)) changes result.current.total.

Mocking external modules is where discipline tends to break down. At AMIA we used jest.mock() at module level for infrastructure dependencies (HTTP clients, repositories), but never mocked our own domain utilities. The mock boundary must align with the architecture boundary.

For components with complex behaviour—forms, multi-step flows—the strategy that paid off most was writing integration tests before unit tests. First verify the full flow with userEvent.type and userEvent.click, then edge cases. This also doubles as living documentation for the feature.`,
    },
  },
  {
    slug: "monorepo-multi-tenant-nestjs-amia",
    date: "2024-09-05",
    readingTime: 5,
    tags: ["NestJS", "Monorepo", "Multi-tenant", "DI"],
    title: {
      es: "Monorepo multi-tenant en NestJS: lo que aprendí en AMIA",
      en: "Multi-tenant monorepo in NestJS: what I learned at AMIA",
    },
    summary: {
      es: "Decisiones reales sobre paquetes compartidos, inyección de dependencias por tenant y trade-offs del monorepo.",
      en: "Real decisions about shared packages, per-tenant dependency injection and monorepo trade-offs.",
    },
    body: {
      es: `En AMIA el desafío era un solo codebase que debía servir a múltiples clientes con reglas de negocio distintas. La solución fue un monorepo NestJS con workspaces: una capa shared con entidades, DTOs y contratos de repositorio, y apps separadas por dominio de negocio que importaban desde esa capa.

El punto más delicado fue la inyección de dependencias multi-tenant. En lugar de instanciar servicios con lógica condicional dentro, usamos el sistema de DI de NestJS para registrar implementaciones distintas según el tenant. Con un factory provider basado en el request context podías resolver qué repositorio concreto inyectar dependiendo del tenant identificado en el JWT.

El trade-off más real del monorepo: los cambios de ruptura en shared se detectan en tiempo de compilación para todas las apps al mismo tiempo. Eso es una ventaja enorme de mantenibilidad pero puede frenar deploys independientes si no tenés buena disciplina de versionado interno.

Lo que evitamos fue meter lógica de presentación en shared. Esa capa solo exponía types, interfaces y casos de uso abstractos. Los módulos de cada app se encargaban del formato de respuesta y la validación de entrada. Esa separación fue lo que permitió que el sistema escalara sin deuda técnica acumulada.

Hoy recomendaría este approach para cualquier SaaS con variantes de tenant que comparten el 70 % o más de la lógica central.`,
      en: `At AMIA the challenge was a single codebase that needed to serve multiple clients with different business rules. The solution was a NestJS monorepo with workspaces: a shared layer with entities, DTOs and repository contracts, and separate apps per business domain importing from that layer.

The most delicate point was multi-tenant dependency injection. Instead of instantiating services with conditional logic inside them, we used NestJS's DI system to register different implementations depending on the tenant. With a factory provider based on request context you could resolve which concrete repository to inject depending on the tenant identified in the JWT.

The most real trade-off of the monorepo: breaking changes in shared are detected at compile time for all apps simultaneously. That's a huge maintainability advantage but can slow down independent deploys if you don't have good internal versioning discipline.

What we avoided was putting presentation logic in shared. That layer only exposed types, interfaces and abstract use cases. Each app's modules handled response formatting and input validation. That separation was what allowed the system to scale without accumulating technical debt.

Today I'd recommend this approach for any SaaS with tenant variants that share 70 % or more of the core logic.`,
    },
  },
  {
    slug: "clean-architecture-nodejs-dominio-infraestructura",
    date: "2024-07-22",
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
