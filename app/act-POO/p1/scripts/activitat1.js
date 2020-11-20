/**
 * Funcion constructora con funciones hijas para sumar, mostrar y cambiar las coordenadas introducidas
 * @param {*} x coordenada x introducida
 * @param {*} y coordenada y introducida
 */

function coordenadasPunto(x, y) {
  this.coordx = isNaN(x) ? 0 : x;
  this.coordy = isNaN(y) ? 0 : y;

  this.cambiar = (varx, vary) => {
    this.coordx = varx;
    this.coordy = vary;
  };

  /**
   *
   */

  this.copiar = () => new coordenadasPunto(this.coordx, this.coordy);

  /**
   * Devuelve la suma de las variables de la funcion principal
   * @param {*} punto2 Nuevo punto instanciado
   */

  this.suma = (p2) =>
    new coordenadasPunto(this.coordx + p2.coordx, this.coordy + p2.coordy);
}

//Creación nuevo punto con parametros X e Y

var punto1 = new coordenadasPunto(10, 5);

console.log(
  'Punto 1 - Valor de x: ' + punto1.coordx + ' Valor de y: ' + punto1.coordy
);

//Cambiar coordenadas del punto creado

punto1.cambiar(10, 10);

console.log(
  `Punto 1 Valores cambiados: x = ${punto1.coordx} / y = ${punto1.coordy}`
);

//Copiar el objeto a otra variable

var punto2 = punto1.copiar();

console.log(
  `Punto 2 copia(punto1): valor x: ${punto2.coordx} / valor y: ${punto2.coordy}`
);

//Sumar las dos coordenadas del punto creado

var punto3 = punto1.suma(punto2);

console.log(
  `Punto 3 - Suma de las coordenadas: x = ${punto3.coordx} / y: ${punto3.coordy}`
);

//Pasar valor de x con una letra

var punto4 = new coordenadasPunto('a', 5);

console.log(`Punto 4 valores -> x: ${punto4.coordx} / y: ${punto4.coordy}`);
