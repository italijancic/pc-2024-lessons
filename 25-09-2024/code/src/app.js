import { prompt } from './prompt.js'

// Problema 5: Clase 11-09-2024
// Implementar un programa que elimine los números primos de un vector Dado

function esPrimo(numero) {
  let contdivisores = 0
  for (let divPrueba = 1; divPrueba <= numero; divPrueba++) {
    if (numero % divPrueba === 0) {
      contdivisores++
    }
  }
  if (contdivisores === 2) { return true }
  else { return false }
}

function rndInt(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

function getRndVector(min, max, arrayDim) {
  let numeros = new Array(arrayDim)

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = rndInt(min, max)
  }

  return numeros.slice()
}

const filterPrimes = (array) => {
  const result = []
  let index = 0

  for (let i = 0; i < array.length; i++) {
    if (!esPrimo(array[i])) {
      result[index] = array[i]
      index++
    }
  }

  return result.slice()
}

let min = parseInt(prompt('Ingrese la cota inferior de los elementos del vector: '))
let max = parseInt(prompt('Ingrese la cota superior de los elementos del vector: '))
let arrayDim = parseInt(prompt('Ingrese dimension del vector: '))

let numeros = getRndVector(min, max, arrayDim)
console.log('El vector aleatorio generado es')
console.log(numeros)

let filtered = filterPrimes(numeros)
console.table(filtered)
