import { prompt } from './prompt.js'

console.log("-----------------------------------------------------------------------------------")
console.log("Problema N°1: Generar un vector de números aleatorios No Repetidos en un rango dado")
console.log("-----------------------------------------------------------------------------------")
console.log("")

let max1 = parseInt(prompt("Ingrese numero maximo a usar: "))
let min1 = parseInt(prompt("Ingrese numero minimo a usar: "))
let size1 = parseInt(prompt("Ingrese la dimension del vector: "))

const randomEnt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const uniq = (vector, n) => {
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === n) {
      return false
    }
  }
  return true
}

function GenVectorRand(size, min, max) {
  const vector = new Array(size)
  let currentSize = 0

  while (currentSize < vector.length) {
    let rndNumber = randomEnt(min, max)

    if (uniq(vector, rndNumber)) {
      vector[currentSize] = rndNumber
      currentSize++
    }
  }

  return vector
}

function GenVectorRand2(size, min, max) {
  const vector = new Array(size)
  let rndNumber = undefined

  for (let i = 0; i < vector.length; i++) {
    do {
      rndNumber = randomEnt(min, max)
    } while (!uniq(vector, rndNumber))
    vector[i] = rndNumber
  }

  return vector.slice()
}

console.log(GenVectorRand(size1, min1, max1))
// console.log(GenVectorRand2(size1, min1, max1))
