import { prompt } from './prompt.js'

/**
 * Generates a random integer within a specified range [min, max].
 *
 * @param {number} min - The minimum value for the random range.
 * @param {number} max - The maximum value for the random range.
 * @returns {number} A random integer between min and max (inclusive).
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Checks if a number is even.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
const isEven = (n) => n % 2 === 0

/**
 * Generates a random vector of even integers within a specified range [min, max].
 *
 * @param {number} size - The size of the random vector to generate.
 * @param {number} min - The minimum value for the random range.
 * @param {number} max - The maximum value for the random range.
 * @returns {Array<number>} A vector of random even integers between min and max (inclusive).
 */
const generateEvenRndVector = (size, min, max) => {
  const result = new Array(size)

  for (let i = 0; i < size; i++) {
    let number
    // Keep generating numbers until an even one is found
    do {
      number = rndInt(min, max)
    } while (!isEven(number))

    result[i] = number
  }

  return result.slice()
}

let size = parseInt(prompt('Ingrese la cantidad de número aleatorios a generar: '))
let min = parseInt(prompt('Ingrese el valor mínimo del rango: '))
let max = parseInt(prompt('Ingrese el valor máximo del rango: '))

console.log(generateEvenRndVector(size, min, max))

