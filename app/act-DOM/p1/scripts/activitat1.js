/**
 * Redirige a www.google.es transcurridos 5 segundos
 */
function cambiarWeb() {
  document.write('Nos vamos');

  setTimeout(() => {
    location = 'https://www.google.es';
  }, 5000);
}

cambiarWeb();
