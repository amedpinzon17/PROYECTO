import {getAutos} from "./api.js";

document.addEventListener("DOMContentLoaded", showCiclista);
const carta = document.querySelector(".cartas")


async function showCiclista(){
    const data = await getAutos();
    data.forEach((element) => {
        const {marca, modelo, imagenes, vendedor, año, precio, descripción, estado, kilometraje, registros_accidentes, historial_mantenimiento} = element;
        carta.innerHTML += `
        <div class="card">
            <img src="${imagenes}" width="350px" height="250" style="border-radius: 1rem;">
            <div class="card__content">
                <p class="card__title">${marca} ${modelo}</p>
                <p class="card__description"    </p>
                <p class="card__description">- ${precio} </p>  
                <p  style="color: white";> - ${vendedor}</p>
                <p  style="color: white";> - ${año}</p>
                <p  style="color: white";> - ${descripción}</p>
                <p  style="color: white";> - ${estado}</p>
                <p  style="color: white";> - ${historial_mantenimiento}</p>
                <p  style="color: white";> - ${registros_accidentes}</p>
                <p  style="color: white";> - ${kilometraje}</p>
        </div>
        `
    }) 
}