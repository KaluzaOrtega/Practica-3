"use strict"

function funcion()  {
    let datos = {
        nombre:"",
        apellidos:"",
        correo:"",
        password:"",
        fecha:"",
        sexo:"",
        imagen:"",
    }
    datos.nombre = document.getElementById("nombre");
    localStorage.setItem("nombre", datos.nombre.value);
    datos.apellidos = document.getElementById("apellido");
    localStorage.setItem("apellido", datos.apellidos.value);
    datos.correo = document.getElementById("createCorreo");
    localStorage.setItem("createCorreo", datos.correo.value);
    datos.password = document.getElementById("createPassword");
    localStorage.setItem("createPassword", datos.password.value); 
    datos.fecha = document.getElementById("fecha");
    localStorage.setItem("fecha", datos.fecha.value);

    if (document.querySelector('#Hombre').checked == true)
        datos.sexo = "Hombre";
    else
        datos.sexo = "Mujer";

    datos.imagen = document.getElementById("imagen");
    localStorage.setItem("imagen", datos.imagen.value);

    console.log(datos);
}