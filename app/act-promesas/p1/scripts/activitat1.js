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

let parrafo = document.getElementById('parrafo');

/**
 *  Devolverá un texto que se le pase como parámetro
 * @param {*} txt Texto que devolverá la función
 */
function texto(txt) {
  return txt;
}

//Se guarda en una variable la función principal tiempo pasándole los ms y los textos que escribirá en función
//de si se cumple o no la promesa
let promesa = tiempo(
  5000,
  texto('Tiempo concluido'),
  texto('El tiempo no va bien')
);

//Se cumple la promesa y agrega al párrafo el texto pasado como parámetro anteriormente
promesa
  .then((response) => {
    parrafo.textContent = response;
  })
  .catch((error) => {
    parrafo.textContent = error;
  });
