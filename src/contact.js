export const crearContacto = () => {
  const contactoDiv = document.createElement('div');
  contactoDiv.classList.add('seccion-contacto');

  contactoDiv.innerHTML = `
    <h2>Contacto</h2>
    <p>📍 Dirección: Calle Falsa 123</p>
    <p>📞 Teléfono: +57 300 123 4567</p>
    <p>📧 Email: info@restaurante.com</p>
  `;

  return contactoDiv;
};
