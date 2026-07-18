export const crearHome = () => {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add("home-contendedor");

    homeDiv.innerHTML = `
        <h1>Un rincón para ti,<br>una taza para el alma</h1>
        <div class="home-horarios">
            <p>Lunes a Viernes: 8:00 am – 10:00 pm</p>
            <p>Sábados y Domingos: 9:00 am – 11:00 pm</p>
        </div>
    `;

    return homeDiv;
}