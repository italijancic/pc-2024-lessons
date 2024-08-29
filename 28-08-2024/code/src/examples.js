import { prompt } from './prompt.js'

// E1
console.log('-----------')
console.log('Ejercicio 1')
console.log('-----------')

for (let i = 1; i <= 10; i++){
  console.log(i)
}

console.log('')


// E2
console.log('-----------')
console.log('Ejercicio 2')
console.log('-----------')

let i = 1

while (i <= 10) {
  console.log(i)
  i++
}

console.log('')

// E3
console.log('-----------')
console.log('Ejercicio 3')
console.log('-----------')

i = 1

do {
  console.log(i)
  i++
} while (i <= 10)

console.log('')

// E4
console.log('-----------')
console.log('Ejercicio 4')
console.log('-----------')

for (let i = 2; i <= 20; i += 2) {
  console.log(i)
}

console.log('')

// E5
console.log('-----------')
console.log('Ejercicio 5')
console.log('-----------')

i = 1
let sum = 0

while (i <= 100) {
  sum += i
  i++
}

console.log(`La suma de los números del 1 al 100 es: ${sum}`)

console.log('')

// E6
let number

do {
  number = parseInt(prompt("Ingrese un número (ingrese un número negativo para salir): "), 10)
} while (number >= 0)

console.log("Terminaste el programa porque ingresaste un número negativo.")

console.log('')
