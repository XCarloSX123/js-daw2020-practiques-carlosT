/**
 * Crea una promesa pasándole 3 parámetros
 * @param {integer} ms Parámetro pasado en milisegundos utilizado en los setTimeout para indicar
 * el tiempo que pasará antes de ejecutar el contenido del mismo
 * @param {string} resuelto Devuelve una frase si la promesa se cumple
 * @param {string} rechazado Devuleve una frase si la promesa no se cumple
 * returns Devuelve una promesa con una frase dependiendo si la promesa se cumple o no
 */
function tiempo(ms, resuelto, rechazado) {
  let promise = new Promise((resolver, rechazar) => {
    let tempor1 = setTimeout(() => {
      resolver(resuelto);
    }, ms);

    let tempor2 = setTimeout(() => {
      rechazar(rechazado);
    }, ms * 2);
  });

  return promise;
}

/**
 * Funcion asíncrona que genera un temporizador pasándole ciertos parámetros para su funcionamiento
 * @param {integer} start Número pasado por el cual el temporizador empezará a descontar tiempo
 * @param {*} escribir Elemento donde escribirá la cuenta atrás
 * @param {*} interval Intervalo de segundos en el que cambia cada número
 * @param {*} callback Función callback que se ejecutará una vez finalice el temporizador
 */
async function cuenta(
  start,
  escribir = document.querySelector('body'),
  interval = 1000,
  callback = () => {}
) {
  let contador = start;

  //Inicializa la promesa en una variable pas
  while (contador >= 0) {
    let promesa = tiempo(
      interval,
      () => {
        return true;
      },
      () => {
        return false;
      }
    );

    //Cuando se obtiene una respuesta de la promesa se manda al elemento body para ser escrita en su elemento hijo correspondiente
    let aux = await promesa
      .then((response) => {
        escribir.textContent = contador--;
      })

      //En caso de error la variable contador será -1 lo que parará el bucle
      .catch((error) => {
        contador = -1;
      });
  }

  callback();
}

//Funciones exportadas para ser usadas en el fichero html correspondiente
export { tiempo, cuenta };
