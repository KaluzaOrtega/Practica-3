"use strict";
function cambio() {
  for (let i=0;i<document.querySelectorAll("input").lengh;i++) {
    document.querySelectorAll("input")[i].blur = function () {validacion()}
  }
}

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
  if (!validacion()) {
    alert('verifica que los campos estén completos');
    return
  }

  user.nombre = document.getElementById("nombre").value;

  user.apellidos = document.getElementById("apellido").value;

  user.studentID = document.getElementById("studentID").value;

  user.correo = document.getElementById("createCorreo").value;

  user.password = document.getElementById("createPassword").value;

  user.fecha = document.getElementById("fecha").value;

  if (document.querySelector("#Hombre").checked == true) user.sexo = "Hombre";
  else user.sexo = "Mujer";

  user.imagen = document.getElementById("imagen").value;

  console.log(user);
}

function validacion() {
  var campos = document.querySelectorAll("input[required]");
  var contador = 0;
  for(let i=0;i<campos.length;i++)  {
    if (campos[i].innerText.trim().length>0)
      contador++;
  }
  if (campos.length == contador)
    document.querySelector("button[type=submit]").removeAttribute("disabled");

  return campos.lenght == contador;
}
