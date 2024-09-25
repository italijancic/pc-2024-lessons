# Class Notes
## Ejemplos de código

### Ejemplo/Problema 2: Generar un Vector de Números Pares

```js
/**
 * Generates an array of even numbers.
 *
 * @param {number} size - The size of the array to generate.
 * @returns {number[]} An array of even numbers.
 */
function generarVectorPares(size) {
  const vector = new Array(size)
  let numero = 0
  let index = 0

  while (index < size) {
      if (numero % 2 === 0) {
          vector[index] = numero
          index++
      }
      numero++
  }

  return vector
}

console.log(generarVectorPares(5)) // Ejemplo de salida: [0, 2, 4, 6, 8]
```

### Ejemplo/Problema 3: Generar un Vector de Números Impares

```js
/**
 * Generates an array of odd numbers.
 *
 * @param {number} size - The size of the array to generate.
 * @returns {number[]} An array of odd numbers.
 */
function generarVectorImpares(size) {
  const vector = new Array(size)
  let numero = 1
  let index = 0

  do {
      if (numero % 2 !== 0) {
          vector[index] = numero
          index++
      }
      numero++
  } while (index < size)

  return vector
}

console.log(generarVectorImpares(5)) // Ejemplo de salida: [1, 3, 5, 7, 9]
```

### Ejemplo/Problema 4: Generar un Vector de Números Primos

```js
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
```
