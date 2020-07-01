"use strict";
var keys=""
function cambio() {
  for (let i=0;i<document.querySelectorAll("input").lengh;i++) {
    document.querySelectorAll("input")[i].blur = function () {validacion()}
  }
}

function createUser() {
  let user = {
    "nombre": "",
    "apellido": "",
    "correo": "",
    "password": "",
    "fecha": "",
    "sexo": "",
    "url": "",
  };
  if (!validacion()) {
    alert('verifica que los campos estén completos');
    return
  }

  user.nombre = document.getElementById("nombre").value;

  user.apellido = document.getElementById("apellido").value;

  user.correo = document.getElementById("createCorreo").value;

  user.password = document.getElementById("createPassword").value;

  user.fecha = document.getElementById("fecha").value;

  if (document.querySelector("#Hombre").checked == true) user.sexo = "H";
  else user.sexo = "M";

  user.url = document.getElementById("imagen").value;

  console.log(user);
  event.preventDefault();
  saveUsersJSON(user)
}

function validacion() {
  var campos = document.querySelectorAll(".modal input[required]");
  var contador = 0;
  for(let i=0;i<campos.length;i++)  {
    if (campos[i].value.trim().length>0)
      contador++;
  }
  if (campos.length == contador)
    document.querySelector(".modal button[type=submit]").removeAttribute("disabled");

  return campos.length == contador;
}
let GetToken=function(){
  getToken(function(cbOK){
    keys=cbOK;
  },function(cbErr){

  }) 
}
let saveUsersJSON = function (Usuario) {
  postUser(Usuario,keys,function(cbOK){
          
  },function(cbErr){
      alert(cbErr)
  })
  
}
