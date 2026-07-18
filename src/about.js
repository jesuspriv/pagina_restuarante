export const crearAbout = () => {
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('seccion-about');

  aboutDiv.innerHTML = `
    <h2>Sobre Nosotros</h2>
    <p>Somos un restaurante familiar fundado en 2026.</p>
    <p>Nuestra misión es servir comida deliciosa hecha con ingredientes frescos y locales.</p>
  `;

  return aboutDiv;
};
