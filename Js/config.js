// ============================================================
// CONFIGURACIÓN CENTRAL DEL NEGOCIO
// Edita este archivo para personalizar toda la web
// ============================================================

const CONFIG = {
  // ---- DATOS DEL NEGOCIO ----
  nombre: "Clínica Dental [NOMBRE]",
  nombreCorto: "Clínica Dental",
  odontologoPrincipal: "[NOMBRE DEL PROFESIONAL]",
  ciudad: "[CIUDAD]",
  provincia: "[PROVINCIA]",
  pais: "Costa Rica",
  direccion: "[DIRECCIÓN EXACTA]",
  telefono: "+50600000000",        // formato internacional
  telefonoVisible: "+506 0000-0000",
  whatsapp: "50600000000",         // solo números, con código país
  correo: "info@clinica.cr",
  horario: "Lunes a Viernes: 8:00 am - 6:00 pm | Sábados: 8:00 am - 12:00 md",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=...", // opcional
  googleMapsLink: "https://maps.google.com/?q=[DIRECCION]",
  
  // ---- REDES SOCIALES (dejar vacío si no aplica) ----
  facebook: "",
  instagram: "",
  tiktok: "",
  
  // ---- COLORES (según paleta aprobada) ----
  colores: {
    azulMarino: "#12304A",
    turquesa: "#19A7A0",
    blanco: "#FFFFFF",
    grisClaro: "#F4F7F8",
    grisOscuro: "#35414A"
  },
  
  // ---- SERVICIOS OFRECIDOS (marcar true solo los reales) ----
  servicios: [
    { id: "general",    activo: true, nombre: "Odontología general",   icono: "🦷", descripcion: "Revisiones, diagnóstico y atención preventiva para mantener tu salud bucodental en óptimas condiciones.", beneficio: "Prevención temprana de problemas dentales." },
    { id: "limpieza",   activo: true, nombre: "Limpieza dental",       icono: "✨", descripcion: "Eliminación profesional de placa y cálculo según indicación clínica de cada paciente.", beneficio: "Encías más sanas y aliento fresco." },
    { id: "blanqueamiento", activo: true, nombre: "Blanqueamiento dental", icono: "💎", descripcion: "Opciones profesionales para aclarar el tono dental, con evaluación previa de cada caso.", beneficio: "Sonrisa más luminosa sin dañar el esmalte." },
    { id: "ortodoncia", activo: true, nombre: "Ortodoncia",             icono: "😁", descripcion: "Evaluación de la alineación dental y opciones de tratamiento según cada paciente.", beneficio: "Mejor función y estética de tu sonrisa." },
    { id: "implantes",  activo: true, nombre: "Implantes dentales",    icono: "🔧", descripcion: "Evaluación de opciones para reemplazar piezas ausentes con soluciones duraderas.", beneficio: "Recupera la función y naturalidad de tu sonrisa." },
    { id: "endodoncia", activo: true, nombre: "Endodoncia",            icono: "🩺", descripcion: "Tratamiento de problemas que afectan la pulpa dental y requieren atención especializada.", beneficio: "Conservación de la pieza dental afectada." },
    { id: "protesis",   activo: true, nombre: "Prótesis dentales",     icono: "🦿", descripcion: "Alternativas para recuperar función y estética en piezas ausentes o dañadas.", beneficio: "Vuelve a sonreír y masticar con confianza." },
    { id: "estetica",   activo: true, nombre: "Odontología estética",  icono: "🌟", descripcion: "Tratamientos destinados a mejorar la apariencia de tu sonrisa, adaptados a tus objetivos.", beneficio: "Resultados naturales y armónicos." },
    { id: "infantil",   activo: true, nombre: "Odontología infantil",  icono: "🧒", descripcion: "Atención adaptada a las necesidades y el ritmo de los más pequeños de la casa.", beneficio: "Experiencias positivas desde temprana edad." },
    { id: "urgencias",  activo: false, nombre: "Urgencias odontológicas", icono: "🚨", descripcion: "Atención de urgencias, según disponibilidad confirmada por la clínica.", beneficio: "Respuesta rápida ante situaciones dolorosas." }
  ],
  
  // ---- EQUIPO (editar con datos verificados únicamente) ----
  equipo: [
    {
      nombre: "[NOMBRE DEL ODONTÓLOGO PRINCIPAL]",
      especialidad: "[ESPECIALIDAD VERIFICADA]",
      colegiatura: "[N.º DE COLEGIATURA]",
      formacion: "[FORMACIÓN ACADÉMICA CONFIRMADA]",
      idiomas: "Español",
      enfoque: "Atención personalizada y cercana, enfocada en el bienestar de cada paciente.",
      foto: "" // ruta a foto real o vacío
    }
  ],
  
  // ---- TESTIMONIOS (SOLO AUTORIZADOS) ----
  testimonios: [], // Si no hay autorizados, dejar vacío. NO INVENTAR.
  
  // ---- FAQ ----
  faq: [
    { p: "¿Cómo puedo solicitar una cita?", r: "Puedes contactarnos por WhatsApp, llamarnos por teléfono o completar el formulario de solicitud de cita en esta página. Nuestro equipo te confirmará la disponibilidad." },
    { p: "¿Qué debo llevar a mi primera consulta?", r: "Tu documento de identidad y, si los tienes, exámenes o radiografías dentales previas. Llega unos minutos antes para completar tu ficha." },
    { p: "¿Cómo puedo conocer el costo de un tratamiento?", r: "El costo depende de cada caso y se determina tras la valoración profesional. Contáctanos para coordinar una consulta y recibir un presupuesto personalizado." },
    { p: "¿La clínica atiende niños?", r: "Sí, contamos con atención odontológica infantil adaptada a las necesidades de los más pequeños." },
    { p: "¿Qué métodos de pago acepta?", r: "Consulta directamente con la clínica los métodos de pago disponibles al momento de agendar tu cita." },
    { p: "¿Qué debo hacer si tengo dolor dental?", r: "Si el dolor es intenso, presenta inflamación importante, traumatismo, o tienes dificultad para respirar o tragar, busca atención profesional urgente de inmediato. Para molestias menores, contáctanos para coordinar una valoración." },
    { p: "¿Dónde se encuentra la clínica?", r: "Nos ubicamos en [DIRECCIÓN]. Puedes usar el botón 'Cómo llegar' en la sección de contacto." },
    { p: "¿Cómo puedo cambiar o cancelar una cita?", r: "Comunícate con nosotros por WhatsApp o teléfono con la mayor anticipación posible para reprogramar tu cita." }
  ]
};
