let user = {
    uid:0,
    nombre:"",
    apellidos: "",
    correo:"",
    password:"",
    fecha:"",
    sexo:"",
    imagen: ""
}

function userToHTML(user)   {
    let fecha=new Date(user.fecha)
    return `<div class="media">
    <div class="media-left"><img src="`+user.imagen+`" alt="Cara libro" class="rounded-circle"></div>
    <div class="media-body col-md-6">
        <h4>`+user.nombre+' '+user.apellidos+`</h4>
        <span>
            uid: `+user.uid+` <br>
            Correo: `+user.correo+` <br>
            password: `+user.password+` <br>
            Fecha de nacimiento: `+fecha.toDateString()+` <br>
            Sexo: `+(user.sexo=='Hombre'? 'Hombre': 'Mujer')+`
        </span>          
    </div>
    <div class="media-right">
        <a name="" id="" class="btn btn-primary" href="#" role="button"><i class="fas fa-search"></i></a> <br>
        <a name="" id="" class="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#modelId4"><i class="fas fa-edit"></i></a> <br>
        <a name="" id="" class="btn btn-warning" href="#" role="button" data-toggle="modal" data-target="#modelId6"><i class="far fa-trash-alt"></i></a> 
    </div>
  </div>`;
}
function userListToHTML(lista)   {
    info.innerHTML = lista.map(userToHTML).join('')
}