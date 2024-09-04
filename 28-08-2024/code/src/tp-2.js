import { prompt } from './prompt.js'

// 1. Números Primos hasta un Número Dado
// --------------------------------------
//    - Escribe un programa que pida al usuario ingresar un número positivo.
//    - El programa debe imprimir todos los números primos desde 1 hasta el número ingresado utilizando un bucle `for`.
//    - Pista: Un número primo es aquel que solo es divisible por 1 y por sí mismo.

// Brief
// -----
// Un número primo es aquel que solo es divisible por 1 y por sí mismo.
// Para determinar si un número i es primo, debemos verificar que no sea divisible por ningún número entre 2 y i-1.
// Sin embargo, hay una forma más eficiente de hacer esto: solo necesitamos comprobar divisibilidad hasta
// la raíz cuadrada del número (i). Si i es divisible por algún número mayor que su raíz cuadrada,
// entonces también es divisible por un número menor que su raíz cuadrada.

console.log()
console.log('----------')
console.log('Problema 1')
console.log('----------')
console.log()

let num = parseInt(prompt("Ingresa un número positivo: "))

if (num > 1) {
  console.log("Números primos hasta " + num + ":")

  for (let i = 2; i <= num; i++) {
    let esPrimo = true
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false
        break
      }
    }
    if (esPrimo) {
      console.log(i)
    }
  }
} else {
  console.log("Por favor, ingresa un número mayor que 1.")
}


// 2. Números Pares hasta un Número Dado
//    - Escribe un programa que solicite al usuario ingresar un número positivo.
//    - El programa debe imprimir todos los números pares desde 1 hasta el número ingresado utilizando un bucle `while`.
//    - **Pista:** Un número es par si es divisible por 2.

console.log()
console.log('----------')
console.log('Problema 2')
console.log('----------')
console.log()

// Programa para imprimir números pares hasta un número dado usando un bucle while
num = parseInt(prompt("Ingresa un número positivo: "))
let i = 1

console.log("Números pares hasta " + num + ":")
while (i <= num) {
  if (i % 2 === 0) {
    console.log(i)
  }
  i++
}

// 3. **Sumatoria de Números Impares**
//    - Escribe un programa que calcule la suma de todos los números impares del 1 al 50 utilizando un bucle `do while`.
//    - El programa debe imprimir la suma total al finalizar.
//    - **Pista:** Un número es impar si no es divisible por 2.
// Programa para calcular la suma de números impares del 1 al 50 usando un bucle do while

console.log()
console.log('----------')
console.log('Problema 3')
console.log('----------')
console.log()

let suma = 0
i = 1

do {
  if (i % 2 !== 0) {
    suma += i
  }
  i++
} while (i <= 50)

console.log("La suma de todos los números impares del 1 al 50 es: " + suma)


// 4. **Serie de Fibonacci**
//    - Crea un programa que solicite al usuario ingresar un número `n` y que imprima los primeros `n` números de
//    - la serie de Fibonacci utilizando un bucle `while`.

console.log()
console.log('----------')
console.log('Problema 4')
console.log('----------')
console.log()

// Solicitar al usuario ingresar un número
let n = parseInt(prompt("Ingrese un número para calcular los primeros n números de la serie de Fibonacci: "))

// Inicializar los primeros dos números de la serie de Fibonacci
let fib1 = 0
let fib2 = 1

// Variable para contar cuántos números de Fibonacci se han generado
let count = 2

// Imprimir los primeros dos números de la serie
console.log(fib1)
console.log(fib2)

// Bucle para calcular los siguientes números de Fibonacci
while (count < n) {
  // Calcular el siguiente número de Fibonacci
  let nextFib = fib1 + fib2
  console.log(nextFib)

  // Actualizar los valores para la próxima iteración
  fib1 = fib2
  fib2 = nextFib

  count++ // Incrementar el contador
}
