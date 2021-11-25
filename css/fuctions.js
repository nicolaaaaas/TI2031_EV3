function modoobscuro(){
    /*Funcion para el modo oscuro*/
    document.querySelector('.body').classList.toggle('dark');
    boton = document.getElementById("boton");
    if (boton.innerText == 'Modo Oscuro'){
        boton.innerText = 'Modo Claro';
        boton.className = 'btn btn-light';
    }
    else{
        boton.innerText = 'Modo Oscuro';
        boton.className = 'btn btn-dark';
    }
}
function rut(){
    /*comprobar si el rut es valido o no */
    document.getElementById("RutV").innerHTML = "";
    let rut = document.getElementById("rut").value;
    if(rut != ""){
        let aux = rut.split("-");
        let a = aux[0];
        let b = aux[1];
        let rutinver = a.split("").reverse();
        let acumulador = 0;
        let multiplicador = 2;
        for(let numero of rutinver){
            acumulador += parseInt(numero) * multiplicador;
            multiplicador++
            if(multiplicador==8){
                multiplicador = 2;
            }
        }
        let digitocalculado = 11 - (acumulador%11);
        if(digitocalculado == b){
            console.log("El rut es valido");
            return rut;
        }
        if(digitocalculado == 10){
            console.log("El rut es valido");
            return rut;
        }
        if(digitocalculado == 11){
            console.log("El rut es valido");
            return rut;
        }
        else{
            console.log("El rut no es valido");
            return ""
        }
    }
    else{
        document.getElementById("RutV").innerHTML = "La pestaña de rut esta vacia";
        return ""
    }
    
}
function validar_nombre(){
    /*validar que el input name no este vacio*/
    document.getElementById("NameV").innerHTML = ""
    let nombre = document.getElementById("name").value;
    if (nombre != ""){
        return nombre
    }
    else{
        document.getElementById("NameV").innerHTML = "El nombre esta vacio"
        return "";
    }
}

function validar_apellido(){
    /*validar que el input apellido no este vacio*/
    document.getElementById("last_nameV").innerHTML = ""
    let apellido = document.getElementById("last_name").value;
    if(apellido != ""){
        return apellido;
    }
    else{
        document.getElementById("last_nameV").innerHTML = "El Apellido esta vacio";
        return "";
    }
}
function validar_email(){
    /*Funcion para validar que el input mail no este vacio*/ 
    document.getElementById("emailV").innerHTML = ""
    let email = document.getElementById("email").value;
    if(email != ""){
        return email;
    }
    else{
        document.getElementById("emailV").innerHTML = "El correo esta vacio"
        return "";
    }
}
function validar_numero(){
    document.getElementById("telV").innerHTML = ""
    let telefono=document.getElementById("tel").value
    if(telefono != ""){
        return telefono;
    }
    else{
        document.getElementById("telV").innerHTML = "No hay numero de telefono"
        return "";
    }
}

function validar_contraseña(){
    /*validar ambas contraseñas*/
    pasword = document.getElementById("password").value;
    pasword2 = document.getElementById("password2").value;
    if(pasword != '' && pasword2 != ''){
        if(pasword == pasword2){
            expreg = /[0-9]/d;
            if(expreg.test(pasword) == true){
                expreg = /[a-z]/d;
                if(expreg.test(pasword) == true){
                    expreg = /[A-Z]/d;
                    if(expreg.test(pasword) == true){
                        document.getElementById("aviso").innerHTML = "";
                        return pasword;
                    }
                    else{
                        document.getElementById("aviso").innerHTML = "Las contraseñas deben de tener almenos una mayuscula";
                        return ""
                    }
                }
                else{
                    document.getElementById("aviso").innerHTML = "Las contraseñas deben de tener almenos una minuscula";
                    return ""
                }
            }
            else{
                document.getElementById("aviso").innerHTML = "Las contraseñas deben tener almenos un numero";
                return ""
            }
        }
        else{
            document.getElementById("aviso").innerHTML = ' ambas contraseñas Deben ser iguales';
            return ""
        }
    }
    else{
        document.getElementById("aviso").innerHTML = "Las contraseñas estan vacias";
        return ""
        
    }
    
}
function llamarr(){
    rutt = rut();
    nombre = validar_nombre();
    apellido = validar_apellido();
    email = validar_email();
    contraseña = validar_contraseña();
    if(rutt!= "" && nombre != "" && apellido != "" && email != "" && contraseña != ""){
        console.log(rutt);
        console.log(nombre);
        console.log(apellido);
        console.log(email);
        console.log(contraseña)
        alert("El Formulario fue enviado exitosamente")
    }
    else{
        alert("Debe de rellenar todos los campos")
    }
}


