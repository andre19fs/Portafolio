document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => { //agregamos un evento submit al formulario
        e.preventDefault(); 

        const nombre = document.getElementById("nombre").value; //obtenemos el nombre a travez del id
        const correo = document.getElementById("email").value;//obtenemos el coreo a travez del id
        const mensajeContacto = document.getElementById("mensaje").value;//obtenemos el mensaje a travez del id

        if (nombre === ""){ //si el nombre esta vacio, mostramos una alerta
            alert("Porfavor ingresa tu nombre ^_^")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if(!emailRegex.test(correo)){ //si el correo no cumple con los caracteres necesarios como @ letras y .
            alert("Asegurate de escribir correctamente tu correo ^_^") //lanzamos una alerta 
            return;
        }

        if (mensajeContacto === ""){//si el mensaje esta vacio, mostramos una alerta
            alert("Porfavor escribe un mensaje ^_^")
            return;
        }

        MensajeContacto(nombre, correo, mensajeContacto) //llamamos a la funcion mensaje contacto que es nuestro bot
            .then(() => {                                //y le pasamos el nombre, correo y mensaje
                formulario.reset();                      
                alert("Mensaje enviado correctamente");  //mostramos una alerta indicando que el mensaje se envio.
            }
            )
            .catch((error) => { // si hay algun error durante el envio, utilizamos este catch
                console.error("Error al enviar el mensaje:", error); //lanza un error por consola
                alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."); //y una alerta indicando que el envio fallo
            });
    })

    document.querySelectorAll('nav a[href^="#"]').forEach(enlace => { //seleccionamos todos los links de navegacion que empiezen con un #
    enlace.addEventListener("click", function(e) { //agregamos un evento click
      e.preventDefault(); 
      const idSeccion = this.getAttribute("href"); //tomamos el valor del href que tienen los links
      const seccion = document.querySelector(idSeccion); //usamos el valor que nos dio recien para buscar en el DOM la seccion con ese id
      if (seccion) { //si encotro alguno, hacemos que la pagina se mueva suavemente
        seccion.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});