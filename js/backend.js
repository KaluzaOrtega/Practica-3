function getUser(cbOK,cbErr) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
   xhr.open('GET', "https://users-dasw.herokuapp.com/api/users");     
    //3. añadir header con la clave
   xhr.setRequestHeader('Security-key',key) 
   // 4. Enviar solicitud        
   xhr.send();        
   // 5. Una vez recibida la respuesta del servidor        
   xhr.onload = function () {        
       if (xhr.status == 200) { // analizar el estatus de la respuesta HTTP
        //console.log(xhr.response);
           let datos = JSON.parse(xhr.response); //esta es la línea que hay que probar
           cbOK(datos)
           // Ejecutar algo si todo está correcto
           console.log(datos); // Significa que fue exitoso             
       } else {           
           // Ocurrió un error     
           alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
           cbErr()
           // ejecutar algo si error 
       }
   };
}

function postUser(cbOK,cbErr) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
   xhr.open('POST', "https://users-dasw.herokuapp.com/api/users");     
    //3. añadir header con la clave
   xhr.setRequestHeader('Security-key',key) 
   // 4. Enviar solicitud        
   xhr.send();        
   // 5. Una vez recibida la respuesta del servidor        
   xhr.onload = function () {        
       if (xhr.status == 200) { // analizar el estatus de la respuesta HTTP
        //console.log(xhr.response);
           let datos = JSON.parse(xhr.response); //esta es la línea que hay que probar
           cbOK(datos)
           // Ejecutar algo si todo está correcto
           console.log(datos); // Significa que fue exitoso             
       } else {           
           // Ocurrió un error     
           alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
           cbErr()
           // ejecutar algo si error 
       }
   };
}

function abcUsuario(metodo,usuario,cbOK,cbErr) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
   xhr.open('metodo', "https://users-dasw.herokuapp.com/api/users/"+usuario.email);     
    //3. añadir header con la clave
   xhr.setRequestHeader('Security-key',key) 
   // 4. Enviar solicitud        
   xhr.send();        
   // 5. Una vez recibida la respuesta del servidor        
   xhr.onload = function () {        
       if (xhr.status == 200) { // analizar el estatus de la respuesta HTTP
        //console.log(xhr.response);
           let datos = JSON.parse(xhr.response); //esta es la línea que hay que probar
           cbOK(datos)
           // Ejecutar algo si todo está correcto
           console.log(datos); // Significa que fue exitoso             
       } else {           
           // Ocurrió un error     
           alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
           cbErr()
           // ejecutar algo si error 
       }
   };
}

function putUser(cbOK,cbErr) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
   xhr.open('PUT', "https://users-dasw.herokuapp.com/api/users");     
    //3. añadir header con la clave
   xhr.setRequestHeader('Security-key',key) 
   // 4. Enviar solicitud        
   xhr.send();        
   // 5. Una vez recibida la respuesta del servidor        
   xhr.onload = function () {        
       if (xhr.status == 200) { // analizar el estatus de la respuesta HTTP
        //console.log(xhr.response);
           let datos = JSON.parse(xhr.response); //esta es la línea que hay que probar
           cbOK(datos)
           // Ejecutar algo si todo está correcto
           console.log(datos); // Significa que fue exitoso             
       } else {           
           // Ocurrió un error     
           alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
           cbErr()
           // ejecutar algo si error 
       }
   };
}

function deleteUser(cbOK,cbErr) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
   xhr.open('DELETE', "https://users-dasw.herokuapp.com/api/users");     
    //3. añadir header con la clave
   xhr.setRequestHeader('Security-key',key) 
   // 4. Enviar solicitud        
   xhr.send();        
   // 5. Una vez recibida la respuesta del servidor        
   xhr.onload = function () {        
       if (xhr.status == 200) { // analizar el estatus de la respuesta HTTP
        //console.log(xhr.response);
           let datos = JSON.parse(xhr.response); //esta es la línea que hay que probar
           cbOK(datos)
           // Ejecutar algo si todo está correcto
           console.log(datos); // Significa que fue exitoso             
       } else {           
           // Ocurrió un error     
           alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
           cbErr()
           // ejecutar algo si error 
       }
   };
}