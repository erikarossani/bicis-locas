function validateForm(){
    var todoCorrecto = true;
    var formulario = document.getElementsByTagName("input");
    
    for(var i=0; i<formulario.length; i++){
      if(formulario[i].type == "text" || formulario[i].type == "email" || formulario[i].type == "password"){
        if(formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
          alert (formulario[i].placeholder );
          todoCorrecto=false;
          }
          
        if (/^[a-z][a-z]*/.test(formulario.nombre)==false){
          alert ("Nombre no valido");
          todoCorrecto=false;
        } 
      }
    }
    
}











