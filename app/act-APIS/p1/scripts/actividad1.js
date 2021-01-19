let usuario = document.querySelector('#nombreguardado');
let usuarioTXT = document.querySelector('#nombre');

//Evento que cuando se presione la tecla 'Enter' ejecutara dos funciones
window.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    guardarNombre();
    mensaje();
  }
});

//Cuando se recargue la pagina web se mostrara por pantalla el usuario guardado en el sessionStorage
window.addEventListener('load', (event) => {
  if (sessionStorage.getItem('usuario') === undefined) {
    return;
  } else {
    mostrarNombre();
  }
});

/**
 * Guarda el usuario introducido en el sessionStorage
 */
function guardarNombre() {
  let nombre = usuarioTXT.value;
  sessionStorage.setItem('usuario', nombre);
}

/**
 * Muestra por pantalla un mensaje para que el usuario refresque la ventana
 * para poder ver el nombre de usuario introducido
 */
function mensaje() {
  let texto = document.querySelector('#mensaje');
  texto.textContent =
    'Presiona F5 o refresca la página para cargar el nombre guardado';
}

/**
 * Obtiene el nombre de usuario guardado en el sessionStorage
 */
function mostrarNombre() {
  let nombreguardado = sessionStorage.getItem('usuario');
  usuario.textContent = nombreguardado;
}
