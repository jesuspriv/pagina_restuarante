import { crearHome } from "./home.js";
import { crearMenu } from "./menu.js";
import { crearContacto } from "./contact.js";
import { crearAbout } from "./about.js";
import "./styles.css";

const content = document.querySelector("#content");
const btn = document.querySelectorAll(".btn");

const homeDiv = crearHome();
content.appendChild(homeDiv);


btn.forEach(boton => {
    boton.addEventListener('click', (e) => {
        content.innerHTML = '';

        if(e.target.textContent === "Home"){
            content.appendChild(crearHome());
        }else if(e.target.textContent === "Menu"){
            content.appendChild(crearMenu());
        }else if(e.target.textContent === "Contact"){
            content.appendChild(crearContacto());
        }else if(e.target.textContent === "About"){
            content.appendChild(crearAbout());
        }else {
            content.appendChild(crearHome());
        }
            
    })
})



