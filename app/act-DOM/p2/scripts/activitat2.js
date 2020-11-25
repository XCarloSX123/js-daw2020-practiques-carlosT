/**
 *
 * @param {String} nombrecookie Nombre de la cookie
 * @param {int} visitas Valor cookie. Veces visitada la pagina
 * @param {String} diasexpirar Fecha de expiracion de la cookie
 * Crea la cookie con los parametros pasados
 */
function crearCookie(nombrecookie, visitas, diasexpirar) {
  var cookie = nombrecookie;

  document.cookie =
    nombrecookie + '=' + visitas + '; expires=' + diasexpirar.toGMTString();
}

/**
 *Leer la cookie pasada como string
 * @param {String} nombrecookie Nombre de la cookie
 */

function leerCookie(nombrecookie) {
  const aux = nombrecookie + '=';

  const inicio = document.cookie.indexOf(aux);

  if (inicio === -1) return null;

  let final = document.cookie.indexOf(';', inicio + aux.length);

  if (final === -1) final = document.cookie.length;

  return document.cookie.substring(inicio + aux.length, final);
}

/**
 *
 * @param {int} dias Duracion en dias de la cookie hasta que expire
 */

function contador(dias) {
  nombrecookie = 'cookie';

  var contadorvisita = leerCookie(nombrecookie);

  const now = new Date();

  var expirarDays = now.getTime() + dias * 24 * 60 * 60 * 1000;

  var expirar = new Date(expirarDays);

  if (!contadorvisita) {
    contadorvisita = 0;
  }

  //Suma +1 al valor de la cookie mientras sea menor o igual a nueve, muestra el valor por pantalla y agrega el valor a la cookie de nuevo
  if (parseInt(contadorvisita) <= 9) {
    contadorvisita = parseInt(contadorvisita) + 1;

    crearCookie(nombrecookie, contadorvisita, expirar);

    document.write('Has visitado esta pagina ' + contadorvisita + ' veces.');

    //Si el valor es mayor a 10 elimina la cookie y reestablece el valor
  } else {
    document.cookie = nombrecookie + '=; max-age=0';
  }
}

//LLamo a la funcion pasandole los días que tiene la cookie antes de expirar
contador(30);
