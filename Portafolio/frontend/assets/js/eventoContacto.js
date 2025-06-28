document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("email").value;
        const mensajeContacto = document.getElementById("mensaje").value;

        if (nombre === ""){
            alert("Porfavor ingresa tu nombre ^_^")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(correo)){
            alert("Asegurate de escribir correctamente tu correo ^_^")
            return;
        }

        if (mensajeContacto === ""){
            alert("Porfavor escribe un mensaje ^_^")
            return;
        }

        MensajeContacto(nombre, correo, mensajeContacto)
            .then(() => {
                formulario.reset();
                alert("Mensaje enviado correctamente");
            }
            )
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            });
    })
});