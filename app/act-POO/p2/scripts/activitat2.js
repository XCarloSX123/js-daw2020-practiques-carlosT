/**
 * Muestra el resultado de la media de todos los valores del array
 */

Array.prototype.media = function () {
  return this.reduce((acu, valor) => acu + valor) / this.length;
};

array1 = [1, 2, 3, 4, 5];

console.log(`Array1: ${array1}`);

console.log('Media array1: ' + array1.media());

array2 = [10, 5, 6, 7, 9];

console.log(`Array2: ${array2}`);

console.log('Media array2: ' + array2.media());
