/**
 * Cambia la imagen de fondo del body cogiéndola de el link pasado como parámetro
 */

function cambiarFondo() {
  var fondo = document.getElementById('div');

  fondo.style.backgroundImage = 'url("https://source.unsplash.com/random")';
}

//Cuando se presionen las teclas Alt + F12 se ejecutará la funcion especificada
window.addEventListener('keyup', (teclaf12) => {
  if (teclaf12.altKey == true && teclaf12.key == 'F12') cambiarFondo();
});
