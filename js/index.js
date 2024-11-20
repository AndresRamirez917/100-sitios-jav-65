const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');
    const mensaje = document.getElementById('mensaje');
    const arr = [nombre, email, fecha, hora, mensaje];
    const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         fecha.value = "";
         hora.value = "";
         mensaje.value = "";
         return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}