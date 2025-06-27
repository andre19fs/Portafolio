document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("email").value;
        const mensajeContacto = document.getElementById("mensaje").value;

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