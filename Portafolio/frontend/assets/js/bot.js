
const TOKEN = '7617603406:AAHsXHxA8dxCRk7UuHy_f8vr5Uy5O8Cicew';
const CHAT_ID = '6750033330';

window.MensajeContacto = async (nombre, correo, mensajeContacto) => {
    const mensaje = `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensajeContacto}`;

    try{
        const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({chat_id: CHAT_ID, text: mensaje})
        });
        const data = await res.json();
        if (!data.ok) console.error('Error al enviar el mensaje:', data.description);

    }catch (error) {
        console.error('Error al enviar el mensaje:', error);
    }
}

