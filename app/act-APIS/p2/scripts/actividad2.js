var temporizador = document.querySelector('#cuentaAtras');

var notificacion = Notification.permission;

//Pedira permiso al usuario para recibir notificaciones
if (notificacion === 'default') {
  Notification.requestPermission();
}

/**
 * Realiza una cuenta atras con el tiempo pasado como parametros
 * @param {int} ms milisegundos para el temporizador
 * @returns {Promise}
 */
function cuentaAtras(ms) {
  return new Promise(function (resolv, reject) {
    setTimeout(() => {
      resolv();
    }, ms);
  });
}

restarTiempo();

/**
 * Decrementa el valor del contador hasta que llegue a 0 y muestre la notificacion
 */
async function restarTiempo() {
  var contador = 5;
  temporizador.innerHTML = contador;

  //Bucle que almacena una promesa que dura 1 segundo mientras que el contador no sea 0
  do {
    var promesa = cuentaAtras(1000);

    await promesa
      .then(() => {
        //Resto 1 al valor del contador y lo muestro por pantalla
        contador--;
        temporizador.innerHTML = contador;
      })
      .catch((error) => {
        console.log(error);
      });
  } while (contador > 0);

  mostrarNotificacion();
}

function mostrarNotificacion() {
  //Se crea notificacion
  var textoNotificacion = new Notification('Información', {
    body: 'Se ha publicado un nuevo video',
  });

  //Evento que al hacer click redirigira a otra pagina html
  textoNotificacion.addEventListener('click', (event) => {
    location.href = 'video.html';
  });
}
