// ==========================================================
// LÓGICA PRINCIPAL DEL SITIO
// ==========================================================
(function() {
  'use strict';

  // ---------- UTILIDADES ----------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Construir enlace WhatsApp
  function waLink(mensaje) {
    const txt = encodeURIComponent(mensaje || `Hola, me gustaría obtener información sobre los servicios de ${CONFIG.nombre} y consultar la disponibilidad para una cita.`);
    return `https://wa.me/${CONFIG.whatsapp}?text=${txt}`;
  }
  window.waLink = waLink;

  // ---------- HEADER: MENÚ MÓVIL ----------
  function initHeader() {
    const hamburger = $('.hamburger');
    const nav = $('.nav');
    if (!hamburger || !nav) return;
    hamburger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    $$('.nav a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }));
  }

  // ---------- SERVICIOS DINÁMICOS ----------
  function renderServicios() {
    const grid = $('#servicesGrid');
    if (!grid) return;
    const activos = CONFIG.servicios.filter(s => s.activo);
    grid.innerHTML = activos.map(s => `
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">${s.icono}</div>
        <h3>${s.nombre}</h3>
        <p>${s.descripcion}</p>
        <div class="service-benefit">${s.beneficio}</div>
        <a href="servicios.html#${s.id}" class="btn btn-outline btn-sm">Conocer más</a>
      </article>
    `).join('');
  }

  // ---------- EQUIPO DINÁMICO ----------
  function renderEquipo() {
    const grid = $('#teamGrid');
    if (!grid) return;
    if (!CONFIG.equipo.length) {
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--gris-medio);">Información del equipo pendiente de actualización.</p>`;
      return;
    }
    grid.innerHTML = CONFIG.equipo.map(m => `
      <article class="team-card">
        <div class="team-photo" aria-hidden="true">
          ${m.foto ? `<img src="${m.foto}" alt="Fotografía de ${m.nombre}">` : '👤'}
        </div>
        <div class="team-info">
          <h3>${m.nombre}</h3>
          <p class="team-specialty">${m.especialidad}</p>
          ${m.colegiatura ? `<p class="team-detail">Colegiatura: ${m.colegiatura}</p>` : ''}
          ${m.formacion ? `<p class="team-detail">${m.formacion}</p>` : ''}
          ${m.idiomas ? `<p class="team-detail">Idiomas: ${m.idiomas}</p>` : ''}
          <p class="team-detail" style="margin-top:8px;">${m.enfoque}</p>
          <a href="${waLink('Hola, quisiera consultar la disponibilidad para una cita.')}"
             target="_blank" rel="noopener" class="btn btn-primary btn-sm">Consultar disponibilidad</a>
        </div>
      </article>
    `).join('');
  }

  // ---------- FAQ ----------
  function renderFAQ() {
    const list = $('#faqList');
    if (!list) return;
    list.innerHTML = CONFIG.faq.map((f, i) => `
      <div class="faq-item" data-faq="${i}">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${i}">
          ${f.p}
        </button>
        <div class="faq-answer" id="faq-ans-${i}" role="region">
          <p>${f.r}</p>
        </div>
      </div>
    `).join('');
    $$('.faq-question', list).forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const ans = $('.faq-answer', item);
        const open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
        ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
      });
    });
  }

  // ---------- FORMULARIO ----------
  function initFormulario() {
    const form = $('#appointmentForm');
    if (!form) return;

    // Poblar select de servicios
    const select = $('#servicioInteres', form);
    if (select) {
      CONFIG.servicios.filter(s => s.activo).forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.nombre;
        opt.textContent = s.nombre;
        select.appendChild(opt);
      });
      const otro = document.createElement('option');
      otro.value = 'Otro / No estoy seguro';
      otro.textContent = 'Otro / No estoy seguro';
      select.appendChild(otro);
    }

    // Restringir fecha mínima a hoy
    const fechaInput = $('#fecha', form);
    if (fechaInput) {
      const hoy = new Date().toISOString().split('T')[0];
      fechaInput.min = hoy;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = $('#formStatus');
      status.className = 'form-status';
      status.textContent = '';

      // Validación básica
      let valido = true;
      $$('.form-group', form).forEach(g => g.classList.remove('error'));

      const nombre = $('#nombre', form).value.trim();
      const telefono = $('#telefono', form).value.trim();
      const servicio = $('#servicioInteres', form).value;
      const fecha = $('#fecha', form).value;
      const franja = $('#franja', form).value;
      const acepto = $('#acepto', form).checked;

      if (nombre.length < 3) { marcarError('#nombre', 'Por favor ingrese su nombre completo.'); valido = false; }
      if (!/^[\d\s+\-()]{8,}$/.test(telefono)) { marcarError('#telefono', 'Ingrese un teléfono válido.'); valido = false; }
      if (!servicio) { marcarError('#servicioInteres', 'Seleccione un servicio.'); valido = false; }
      if (!fecha) { marcarError('#fecha', 'Seleccione una fecha.'); valido = false; }
      if (!franja) { marcarError('#franja', 'Seleccione una franja horaria.'); valido = false; }
      if (!acepto) { marcarError('#acepto', 'Debe aceptar el aviso de privacidad.'); valido = false; }

      if (!valido) {
        status.className = 'form-status error';
        status.textContent = 'Por favor revise los campos marcados en rojo.';
        status.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Honeypot anti-spam
      const honeypot = $('#website', form);
      if (honeypot && honeypot.value) {
        return; // bot
      }

      // Enviar por WhatsApp (entrega real, sin backend)
      const mensaje = 
        `*Solicitud de cita - ${CONFIG.nombre}*\n\n` +
        `👤 Nombre: ${nombre}\n` +
        `📞 Teléfono: ${telefono}\n` +
        `📧 Correo: ${$('#correo', form).value.trim() || 'No indicado'}\n` +
        `🦷 Servicio: ${servicio}\n` +
        `📅 Fecha preferida: ${fecha}\n` +
        `⏰ Franja: ${franja}\n` +
        `📝 Comentario: ${$('#comentario', form).value.trim() || 'Sin comentarios'}\n\n` +
        `_El paciente acepta el aviso de privacidad._`;

      // Guardar también localmente (para respaldo del paciente)
      try {
        const solicitudes = JSON.parse(localStorage.getItem('solicitudesCitas') || '[]');
        solicitudes.push({ fecha: new Date().toISOString(), nombre, telefono, servicio, fechaPreferida: fecha, franja });
        localStorage.setItem('solicitudesCitas', JSON.stringify(solicitudes));
      } catch (err) { /* localStorage puede fallar en modo privado */ }

      // Abrir WhatsApp con el mensaje
      window.open(waLink(mensaje), '_blank', 'noopener');

      status.className = 'form-status success';
      status.innerHTML = '✅ <strong>¡Solicitud preparada!</strong><br>Se abrirá WhatsApp para que envíes la solicitud directamente a la clínica. Recuerda: <em>tu cita no está confirmada hasta que la clínica lo indique.</em>';
      status.scrollIntoView({ behavior: 'smooth', block: 'center' });
      form.reset();
    });

    function marcarError(selector, msg) {
      const input = $(selector, form);
      if (!input) return;
      const grupo = input.closest('.form-group') || input.closest('.checkbox-group')?.parentElement;
      if (grupo) {
        grupo.classList.add('error');
        const em = $('.error-msg', grupo);
        if (em) em.textContent = msg;
      }
    }
  }

  // ---------- WHATSAPP FLOTANTE ----------
  function initWhatsApp() {
    const btn = $('#waFloat');
    if (btn) btn.href = waLink();
    $$('[data-wa]').forEach(el => el.href = waLink(el.dataset.wa || undefined));
    $$('[data-tel]').forEach(el => el.href = `tel:${CONFIG.telefono}`);
  }

  // ---------- AÑO DINÁMICO ----------
  function initYear() {
    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ---------- DATOS DEL NEGOCIO EN DOM ----------
  function initDatos() {
    $$('[data-config]').forEach(el => {
      const key = el.dataset.config;
      if (CONFIG[key]) el.textContent = CONFIG[key];
    });
    // Dirección, teléfono visible, horario
    const dir = $('#direccion'); if (dir) dir.textContent = CONFIG.direccion;
    const tel = $$('.telefono-visible'); tel.forEach(t => t.textContent = CONFIG.telefonoVisible);
    const hor = $$('.horario'); hor.forEach(h => h.textContent = CONFIG.horario);
    const em = $$('.correo'); em.forEach(e => { e.textContent = CONFIG.correo; e.href = `mailto:${CONFIG.correo}`; });
    // Redes sociales
    ['facebook','instagram','tiktok'].forEach(red => {
      const el = $(`[data-social="${red}"]`);
      if (el) {
        if (CONFIG[red]) el.href = CONFIG[red];
        else el.style.display = 'none';
      }
    });
  }

  // ---------- INIT ----------
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    renderServicios();
    renderEquipo();
    renderFAQ();
    initFormulario();
    initWhatsApp();
    initYear();
    initDatos();
  });
})();
