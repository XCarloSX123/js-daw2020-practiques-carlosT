/**
 * Muestra el resultado de la media de todos los valores del array
 */

Array.prototype.sacarMedia = function () {
  return this.reduce((acu, valor) => acu + valor) / this.length;
};

array1 = [1, 2, 3, 4, 5];

console.log(`Array1: ${array1}`);

console.log('Media array1: ' + array1.sacarMedia());

array2 = [9, 2, 9, 1, 6];

console.log(`Array2: ${array2}`);

console.log('Media array2: ' + array2.sacarMedia());
