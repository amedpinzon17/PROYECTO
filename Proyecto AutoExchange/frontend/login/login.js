/* import { logeate } from "./api.js";


const formulario = document.querySelector('#validarUsuario');
formulario.addEventListener('submit', validateLogin);

async function validateLogin(e) {
    e.preventDefault();
    const correo = document.querySelector('#correo');
    const contraseña = document.querySelector('#contraseña');

    const datos = {
        correo_electrónico : correo.value,
        password : contraseña.value,
    };

 
        const response = await logeate(datos);
        if (response) {
            alert("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = '../index.html';

            },1000)
       }else{
        alert("Cancelado", "No has eliminado tu data", "error");
            setTimeout(()=>{
                window.location = 'login.html';

            },1000)
       }

} */


import { logeate } from "./api.js";

const formulario = document.querySelector('#validarUsuario');
formulario.addEventListener('submit', validateLogin);

async function validateLogin(e) {
    e.preventDefault();
    const correo_electronico = document.querySelector('#correo');
    const password = document.querySelector('#contraseña');

    const datos = {
        correo_electrónico: correo_electronico.value,
        password: password.value,
    };


        const response = await logeate(datos);

        if (response) {
            alert("Datos enviados satisfactoriamente");
            setTimeout(() => {
                window.location = '../index.html';
            }, 2000);
        } else {
            alert("Error al iniciar sesión. Verifique sus credenciales.");
        }

}



const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', () =>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
})


