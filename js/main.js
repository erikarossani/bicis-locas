function validateForm(){
    var todoCorrecto = true;
    var formulario = document.getElementsByTagName("input");
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var contra = document.getElementById("input-password").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    for(var i=0; i<formulario.length; i++){
      if(formulario[i].type == "text" || formulario[i].type == "email" || formulario[i].type == "password"){
        if(formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
          alert (formulario[i].placeholder);
          todoCorrecto=false;
          }
      }
    }  
    if(!expr.test(email) ){
      alert("Error: La dirección de correo " + email + " es incorrecta.");
    }
    
    if(contra.length < 5 ){
      alert("Contraseña al menos de 6 caracteres");
      }else if(contra == "123456" || contra =="password" || contra == "098754"){
         alert("Por favor escriba otra contraseña");
    }
    
    if(document.getElementsByTagName("select")[0].value == 0){
      alert("Selecciona tu tipo de bici");
    } 
}











