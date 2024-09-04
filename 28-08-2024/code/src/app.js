import { prompt } from './prompt.js'

// Solicitar al usuario ingresar un número
let n = parseInt(prompt("Ingrese un número para calcular los primeros n números de la serie de Fibonacci:"))

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
