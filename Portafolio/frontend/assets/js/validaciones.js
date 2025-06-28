document.addEventListener("DOMContentLoaded", function (){
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        if (nombre.value.trim() === ""){
            alert("Porfavor ingresa tu nombre ^_^")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)){
            alert("Asegurate de escribir correctamente tu correo ^_^")
            return;
        }
    })
    
})