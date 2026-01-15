export const WHATSAPP_NUMBER = "+51934315587"; // Reemplazar con el número real
export const DEMO_MESSAGE = "Hola, me interesa ver una demo de LUMINA.SH y conocer cómo acelera el desarrollo.";

export const PLANS = [
  {
    name: "Free Tier",
    price: "0€",
    features: ["50 Créditos de Bienvenida", "Modelos Standard (Lumina-3)", "Proyectos Públicos", "Exportación React Básica"],
    cta: "Probar Gratis",
    popular: false
  },
  {
    name: "Maker Pack",
    price: "$25",
    features: ["2,500 Créditos", "Sin Caducidad", "Modelos Premium (Lumina-4)", "Exportación Full Stack", "Proyectos Privados"],
    cta: "Comprar Pack Maker",
    popular: true
  },
  {
    name: "Studio Pack",
    price: "$99",
    features: ["12,000 Créditos", "Sin Caducidad", "Prioridad de Cola (GPU)", "Modo Agente (Auto-fix)", "Soporte Prioritario"],
    cta: "Comprar Pack Studio",
    popular: false
  }
];

export const FEATURES = [
  {
    title: "Orquestación Multi-LLM",
    description: "No te limitamos a un solo cerebro. Alterna dinámicamente entre GPT-4o para lógica compleja, Claude 3.5 para escritura de código frontend y Gemini 1.5 Pro para contextos masivos. Elige el motor perfecto para cada tarea.",
    icon: "Bot"
  },
  {
    title: "Editor Híbrido Bidireccional",
    description: "Lo mejor de dos mundos. Usa nuestro editor visual 'Drag & Drop' para ajustes rápidos de UI, o sumérgete directamente en el código fuente (Monaco Editor). Cualquier cambio en el código se refleja visualmente y viceversa.",
    icon: "LayoutTemplate"
  },
  {
    title: "Historial 'Time-Travel'",
    description: "Nunca pierdas una buena idea. Nuestro sistema de versiones granular te permite retroceder a cualquier prompt anterior, crear 'forks' de tu proyecto para probar ideas alternativas y visualizar diferencias (diffs) en tiempo real.",
    icon: "History"
  },
  {
    title: "Internacionalización (i18n)",
    description: "Rompe barreras lingüísticas. Genera aplicaciones con soporte nativo para múltiples idiomas desde el día uno. El sistema detecta y estructura automáticamente los archivos de traducción (JSON locales) para +50 idiomas.",
    icon: "Globe"
  },
  {
    title: "Arquitectura Limpia & Escalar",
    description: "Olvídate del código espagueti generado por IA. LUMINA implementa patrones de diseño sólidos, separación de responsabilidades (Clean Architecture), tipado estricto en TypeScript y componentes atómicos reutilizables.",
    icon: "Layers"
  },
  {
    title: "Multi-Plataforma Nativo",
    description: "Escribe una vez, despliega en todas partes. Transforma tu aplicación web React en una PWA instalable o exporta a React Native / Expo con un solo clic, manteniendo una coherencia visual y funcional absoluta.",
    icon: "Smartphone"
  }
];

export const DOCS_STEPS = [
  {
    id: 1,
    title: "Prompt & Contexto",
    description: "Empieza con una idea simple o especificaciones complejas. Sube imágenes de referencia, esquemas de BD o simplemente describe lo que quieres: 'Un CRM para dentistas con tema oscuro'.",
    icon: "MessageSquare"
  },
  {
    id: 2,
    title: "Planificación Arquitectónica",
    description: "Antes de escribir código, LUMINA diseña la solución. Selecciona el stack ideal (React, Node, Python), estructura la base de datos y define las rutas de la API y Componentes.",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "Generación Reactiva",
    description: "El motor V4 escribe código limpio en tiempo real. Verás cómo tu interfaz cobra vida instantáneamente en el panel de 'Live Preview' a 60fps, sin tiempos de carga.",
    icon: "Code2"
  },
  {
    id: 4,
    title: "Iteración Híbrida",
    description: "Refina los detalles. Usa el chat para cambios lógicos ('Haz que el login requiera 2FA') o el Editor Visual para ajustes estéticos ('Mueve este botón aquí').",
    icon: "PenTool"
  },
  {
    id: 5,
    title: "Despliegue Global",
    description: "Tu app nace lista para producción. Con un clic, desplegamos el frontend en Edge Networks y el backend en infraestructura Serverless escalable.",
    icon: "Rocket"
  }
];