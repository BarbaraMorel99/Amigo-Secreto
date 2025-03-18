// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() { // Función para agregar un amigo secreto a la lista
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const mensajeError = document.getElementById('mensajeError');

    // Validaciones antes de agregar el nombre
    if (nombre === "") { // No se puede dejar el campo vacío
        alert("Por favor, ingresa un nombre válido."); // Muestra una alerta si no se escribió nada
        return;
    }
  
    if (!isNaN(nombre)) { // No se permiten nombres que sean solo números
        alert("El nombre no puede ser un número."); // Muestra una alerta si intentan ingresar un número
        return;
    }
    
    if (amigos.includes(nombre)) { // No se puede repetir un nombre en la lista
        alert("Este nombre ya está en la lista."); // Muestra una alerta si el nombre ya existe
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista de amigos
    input.value = ""; // Limpia el campo de entrada después de agregarlo

    actualizarListaAmigos(); // Refresca la lista de amigos en la pantalla
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Borra la lista antes de actualizarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const mensajeError = document.getElementById('mensajeError');
    
    if (amigos.length < 2) { // Se necesitan al menos 2 personas para hacer un sorteo
        alert("Necesitas al menos 2 amigos para realizar el sorteo."); // Muestra una alerta si hay menos de 2 nombres
        return;
    }

    // Selecciona un amigo al azar de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Muestra el nombre del amigo secreto en la pantalla
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}
