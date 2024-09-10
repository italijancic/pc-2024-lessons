import { prompt } from './prompt.js';

// CLI input read examples
// -----------------------

// Problema 1: Sum elements
console.log()
console.log('----------')
console.log('Problema 1')
console.log('----------')
console.log()

let numeros = [5, 10, 15, 20, 25];
let sum = 0

for (let i = 0; i < numeros.length; i++) {
  sum += numeros[i]
}

console.log(`El resultado de la suma de todos los elementos es: ${sum}`)

// Problema 2: Sum impar
console.log()
console.log('----------')
console.log('Problema 2')
console.log('----------')
console.log()

numeros = [2, 7, 4, 9, 6, 3, 8]
let count = 0
let index = 0

while (index < numeros.length) {
  if (numeros[index] % 2 !== 0) {
    count++
  }
  index++
}

console.log(`La cantidad de número impares es: ${count}`)

// Problema 3: Find name

console.log()
console.log('----------')
console.log('Problema 3')
console.log('----------')
console.log()

let names = ["Pedro", "Ana", "Luis", "María", "Jose"]
console.log('De esta lista de nombres:')
console.table(names)
let targetName = prompt('Ingrese el nombre que desea encontrar: ')

for (let i = 0; i < names.length; i++) {
  if (names[i] === targetName) {
    console.log(`Nombre ${targetName} encontrado en el índice ${i}`)
    break
  } else {
    if (i === (names.length - 1)) {
      console.log(`El nombre ${targetName} no se encuentra en la lista`)
    }
  }
}

// Problema 4: Find max

console.log()
console.log('----------')
console.log('Problema 4')
console.log('----------')
console.log()

let numbers = [15, 42, 7, 81, 23, 56]
// Alternative max = 0
let max = numbers[0]

for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i]
  }
}

console.log(`El máximo valor del array es: ${max}`)

// Problema 5

console.log()
console.log('----------')
console.log('Problema 5')
console.log('----------')
console.log()

let size = parseInt(prompt('Ingrese la dimensión del vector a definir: '))
let array = []

for (let i = 0; i < size; i++) {
  array[i] = parseInt(prompt(`Ingrese el valor entero correspondiente al índice ${i}: `))
}

console.log('El array ingresado es: ')
console.table(array)
