import { prompt } from './prompt.js'

/**
 * Checks if a number is prime.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function esPrimo(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
  }
  return true
}

/**
* Generates an array of prime numbers.
*
* @param {number} size - The size of the array to generate.
* @returns {number[]} An array of prime numbers.
*/
function generarVectorPrimos(size) {
  const vector = new Array(size)
  let numero = 2
  let index = 0

  while (index < size) {
      if (esPrimo(numero)) {
          vector[index] = numero
          index++
      }
      numero++
  }

  return vector
}

console.log(generarVectorPrimos(5)) // Ejemplo de salida: [2, 3, 5, 7, 11]

