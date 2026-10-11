# 🦷 Sitio Web - [NOMBRE DE LA CLÍNICA]

Sitio web estático, responsive y optimizado para SEO local, listo para publicar en GitHub Pages.

## 🚀 Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado `clinica-dental`.
2. Sube todos los archivos de este proyecto.
3. Ve a **Settings → Pages**.
4. En "Source" selecciona `main` / `root`.
5. Guarda. En minutos tu sitio estará disponible en `https://TU-USUARIO.github.io/clinica-dental/`.

## ✏️ Cómo personalizar

**TODO el contenido editable está en `js/config.js`.** Solo edita ahí y el sitio se actualiza solo.

Campos a completar:
- [ ] Nombre de la clínica
- [ ] Nombre del odontólogo principal
- [ ] Ciudad y provincia
- [ ] Dirección exacta
- [ ] Teléfono (+506...)
- [ ] WhatsApp (solo números con código de país, ej: 50688888888)
- [ ] Correo electrónico
- [ ] Horario de atención
- [ ] Redes sociales (o dejar vacío)
- [ ] Servicios reales (marcar `activo: true/false`)
- [ ] Equipo con datos verificados
- [ ] Testimonios autorizados (o dejar array vacío)

## 🔧 Integraciones que requieren configuración externa

| Elemento | Acción requerida |
|---|---|
| **WhatsApp** | Solo actualizar número en config.js. Ya funciona. |
| **Formulario** | Envía las solicitudes por WhatsApp (entrega real sin backend). Si quieres recibirlas por email, usa [Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com) y edita `main.js`. |
| **Google Maps** | Reemplaza el iframe en `index.html` y `contacto.html` con tu embed real. |
| **Google Analytics 4** | Añade tu script en el `<head>` tras obtener consentimiento. |
| **Search Console** | Verifica el dominio e incluye el sitemap. |
| **Dominio propio** | Configura CNAME en GitHub Pages o tu hosting. |

## ✅ Checklist antes de publicar

- [ ] Reemplacé todos los `[CORCHETES]` en `config.js` y HTML.
- [ ] Verifiqué que el número de WhatsApp funciona correctamente.
- [ ] El teléfono abre marcador en móvil.
- [ ] Probé el formulario en móvil y escritorio.
- [ ] Configuré Google Maps si tengo ubicación.
- [ ] Añadí foto real del odontólogo/instalaciones.
- [ ] Revisé la política de privacidad con un profesional legal.
- [ ] Verifiqué que el correo funciona.
- [ ] Reemplacé URLs `tudominio.cr` por el real.
- [ ] Revisé la consola del navegador sin errores.
- [ ] Verifiqué el sitio en móvil, tablet y escritorio.

## 📞 Soporte

Para dudas técnicas sobre la implementación, contacta a tu desarrollador.
