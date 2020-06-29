"use strict";

function createUser() {
  let user = {
    studentID: 0,
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    fecha: "",
    sexo: "",
    imagen: "",
  };
  user.nombre = document.getElementById("nombre").value;

  user.apellidos = document.getElementById("apellido").value;

  user.correo = document.getElementById("createCorreo").value;

  user.password = document.getElementById("createPassword").value;

  user.fecha = document.getElementById("fecha").value;

  if (document.querySelector("#Hombre").checked == true) user.sexo = "Hombre";
  else user.sexo = "Mujer";

  user.imagen = document.getElementById("imagen").value;

  console.log(user);
}
