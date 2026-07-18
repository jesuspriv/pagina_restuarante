export const crearMenu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-comida');

  menuDiv.innerHTML = `
    <h2>Nuestro Menú</h2>

    <div class="menu-categoria">
      <h3 class="categoria-titulo"> Cafés de Especialidad</h3>
      <div class="menu-grid">
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400" alt="Espresso"/>
          <div class="menu-card-info">
            <h4>Espresso</h4>
            <p>Concentrado puro de café de origen colombiano.</p>
            <span>$4.500</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1534778101976-62847782c213?w=400" alt="Cappuccino"/>
          <div class="menu-card-info">
            <h4>Cappuccino</h4>
            <p>Espresso con leche vaporizada y espuma sedosa.</p>
            <span>$6.500</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" alt="Cold Brew"/>
          <div class="menu-card-info">
            <h4>Cold Brew</h4>
            <p>Café extraído en frío por 12 horas. Suave e intenso.</p>
            <span>$7.000</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" alt="Latte de Vainilla"/>
          <div class="menu-card-info">
            <h4>Latte de Vainilla</h4>
            <p>Espresso suave con leche y sirope de vainilla natural.</p>
            <span>$7.500</span>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-categoria">
      <h3 class="categoria-titulo"> Postres Artesanales</h3>
      <div class="menu-grid">
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" alt="Cheesecake"/>
          <div class="menu-card-info">
            <h4>Cheesecake de Maracuyá</h4>
            <p>Base de galleta, crema suave y coulis de maracuyá tropical.</p>
            <span>$9.000</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" alt="Brownie"/>
          <div class="menu-card-info">
            <h4>Brownie con Helado</h4>
            <p>Brownie caliente de chocolate con helado de vainilla.</p>
            <span>$8.500</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400" alt="Waffle"/>
          <div class="menu-card-info">
            <h4>Waffle Belga</h4>
            <p>Waffle crujiente con fresas, chantilly y miel de maple.</p>
            <span>$10.000</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" alt="Torta de Chocolate"/>
          <div class="menu-card-info">
            <h4>Torta de Chocolate</h4>
            <p>Húmeda, intensa y cubierta con ganache de chocolate oscuro.</p>
            <span>$8.000</span>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-categoria">
      <h3 class="categoria-titulo"> Experiencias</h3>
      <div class="menu-grid">
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400" alt="Juegos de Mesa"/>
          <div class="menu-card-info">
            <h4>Alquiler de Juegos</h4>
            <p>Más de 50 juegos disponibles. Alquiler por hora por mesa.</p>
            <span>$5.000 / hora</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400" alt="Noche Temática"/>
          <div class="menu-card-info">
            <h4>Noche Temática</h4>
            <p>Cada viernes una temática diferente. Incluye consumo mínimo.</p>
            <span>$25.000 / persona</span>
          </div>
        </div>
        <div class="menu-card">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400" alt="Mesa Privada"/>
          <div class="menu-card-info">
            <h4>Reserva de Mesa Privada</h4>
            <p>Espacio exclusivo para grupos. Incluye decoración especial.</p>
            <span>Desde $80.000</span>
          </div>
        </div>
      </div>
    </div>
  `;

  return menuDiv;
};