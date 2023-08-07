import { getComprador } from "./api.js";

document.addEventListener("DOMContentLoaded", showComprador);
const cartas = document.querySelector('.contenido');


async function showComprador(){
    const dataos = await  getComprador();
    dataos.forEach((element) => {
        const {comprador,apellido, correo_electrónico, fecha_de_nacimiento, dirección, ciudad, número_telefónico} = element;
        cartas.innerHTML += `
            <div class="card">
                <div class="main-content">
                    <div class="header">
                    <span>${ciudad}</span>
                    <span>${fecha_de_nacimiento}</span>
                </div>
                    <p class="heading">${comprador} ${apellido}</p>
                <div class="categories">
                    <span>${dirección}</span>
                    <span>${número_telefónico}</span>
                </div>
                </div>
                <div class="footer">${correo_electrónico}</div>
            </div>
        
        `
    });
}