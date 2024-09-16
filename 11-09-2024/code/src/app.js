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
 * Generates an array of random integers within a given range.
 *
 * @param {number} size - The size of the array to generate.
 * @param {number} min - The minimum value for the random range.
 * @param {number} max - The maximum value for the random range.
 * @returns {number[]} An array of random integers.
 */
function generarVectorAleatorio(size, min, max) {
    const vector = new Array(size) // Corrección: se agrega ';' al final de la línea.

    for (let i = 0; i < size; i++) { // Corrección: se agregan ';' en el bucle 'for'.
        vector[i] = rndInt(min, max)
    }

    return vector
}

let size = parseInt(prompt('Ingrese la dimensión del vector a generar: '))
let min = parseInt(prompt('Ingrese el valor mínimo del rango aleatorio: '))
let max = parseInt(prompt('Ingrese el valor máximo del rango aleatorio: '))

console.log(generarVectorAleatorio(size, min, max))

