"use strict"

function createUser()  {
    let user = {
        nombre:"",
        apellidos:"",
        correo:"",
        password:"",
        fecha:"",
        sexo:"",
        imagen:"",
    }
    user.nombre = document.getElementById("nombre");
    localStorage.setItem("nombre", user.nombre.value);
    user.apellidos = document.getElementById("apellido");
    localStorage.setItem("apellido", user.apellidos.value);
    user.correo = document.getElementById("createCorreo");
    localStorage.setItem("createCorreo", user.correo.value);
    user.password = document.getElementById("createPassword");
    localStorage.setItem("createPassword", user.password.value); 
    user.fecha = document.getElementById("fecha");
    localStorage.setItem("fecha", user.fecha.value);

    if (document.querySelector('#Hombre').checked == true)
        user.sexo = "Hombre";
    else
        user.sexo = "Mujer";

    user.imagen = document.getElementById("imagen");
    localStorage.setItem("imagen", user.imagen.value);

    console.log(user);
}