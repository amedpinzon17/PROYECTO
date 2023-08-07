import { getVendedores } from "./api.js";

document.addEventListener("DOMContentLoaded", showVendedores);
const cartas = document.querySelector('.contenido');


async function showVendedores(){
    const dataos = await  getVendedores();
    dataos.forEach((element) => {
        const {imagen, vendedor, apellido, correo_electrónico, fecha_de_nacimiento,
        dirección, ciudad, número_telefónico, vendedor_verificado, reputación } = element;
        cartas.innerHTML += `
                <div class="card">
                    <img class="img" src="${imagen}" width="50px" height="50">
                        <span>${vendedor} ${apellido}</span>
                            <p class="info"> - ${correo_electrónico}</p>
                            <p class="info"> - ${fecha_de_nacimiento}</p>
                            <p class="info"> - ${dirección}  ${ciudad}</p>
                            <p class="info"> - ${número_telefónico}</p>
                            <p class="info"> - ${reputación}</p>
                            
                    <div class="share">
                        
                    </div>
                </div>
        
        `
    });
}