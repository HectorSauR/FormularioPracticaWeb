// (function(){
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre;
        correo = formulario.correo;
        edad = formulario.edad;
        terminos = formulario.terminos;
        contra = formulario.contra;
        contraConf = formulario.contraConf;
        error = document.getElementById('error');
    
    function validarNombre(e){
        if(nombre.value == "" || nombre.value == null){
            // nombre.style.backgroundColor = "red";
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor completa el nombre</li>';
            e.preventDefault();
            return true;
        }else{
            error.style.display = 'none';
            return false;
        }
    }

    function validarCorreo(e){
        if(correo.value == "" || correo.value == null){
            error.innerHTML += '<li>Porfavor completa el correo</li>';
            e.preventDefault();
            return true;
        }else{
            return false;
        }
    }

    function validarNumero(e){
        if(edad.value == "" || edad.value == null){
            error.innerHTML += '<li>Porfavor ingresa la edad</li>';
            e.preventDefault();
            return true;
        }else{
            return false;
        }
    }

    function validarFormulario(e){
        error.innerHTML = '';
        // console.log(validarNombre(e));
        // console.log(validarNumero(e));
        // console.log(validarCorreo(e));
        // console.log(validarTerminos(e));
        let resul = validarNombre(e);
        resul = validarNumero(e) || resul; 
        resul = validarCorreo(e) || resul;
        // resul = resul

        if(resul){
            error.style.display = 'block';  
        }else error.style.display = 'none';
    }

    formulario.addEventListener('submit', validarFormulario);
// }())