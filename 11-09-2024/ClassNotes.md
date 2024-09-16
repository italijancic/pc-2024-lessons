# 📝 11/09/2024: Class Notes

## Funciones en JavaScript y Aplicaciones en Vectores
Autor: Ivan, Talijancic

## Apunte de Clases:

### 1. Concepto de Función en Programación

En programación, una **función** es un bloque de código que se utiliza para realizar una tarea específica. Las funciones permiten:

- **Reutilizar** el código
- Mantener el código **organizado**
- **Mejorar** su legibilidad.

En `JavaScript`, existen dos formas principales de declarar funciones:

1. **Funciones Tradicionales**: Utilizan la palabra clave `function`.
2. **Arrow Functions**: Introducidas en ECMAScript 6 (ES6), ofrecen una sintaxis más compacta.

#### Funciones Tradicionales

La sintaxis básica de una función tradicional es:

```js
function nombreDeLaFuncion(parametro1, parametro2) {
    // Código a ejecutar
    return resultado
}
```

**Ejemplo**:

```js
function sumar(a, b) {
    return a + b
}

console.log(sumar(5, 3)) // Salida: 8
```

#### Arrow Functions

Las **arrow functions** son más compactas y se escriben de la siguiente manera:

```js
const nombreDeLaFuncion = (parametro1, parametro2) => {
    // Código a ejecutar
    return resultado
}
```

Si la función tiene una sola línea de código, se puede omitir el `return` y las llaves `{}`:

```js
const sumar = (a, b) => a + b

console.log(sumar(5, 3)) // Salida: 8
```

### 2. Buenas Prácticas para la Escritura de Funciones en JavaScript

- **Nombrar funciones de forma descriptiva**: Utiliza nombres que describan claramente lo que hace la función.
- **Mantener funciones cortas y enfocadas en una tarea**: Una función debería realizar una única tarea.
- **Evitar el uso de variables globales dentro de funciones**: Las funciones deberían trabajar con sus parámetros y variables locales.
- **Escribir funciones puras siempre que sea posible**: Una función pura no tiene efectos secundarios y devuelve siempre el mismo resultado para los mismos argumentos.
- **Documentar las funciones**: Incluye comentarios que expliquen el propósito, los parámetros y el valor de retorno.

### 3. Generación de Números Aleatorios con `Math.random()`

En JavaScript, la generación de números aleatorios se realiza mediante la función incorporada `Math.random()`. Esta función devuelve un número decimal aleatorio mayor o igual que `0` y menor que `1`.

#### Ejemplo de uso de `Math.random()`:

```js
console.log(Math.random())
```

Dado que `Math.random()` solo proporciona números decimales en el rango `[0, 1)`, es necesario aplicar algunas operaciones matemáticas para convertir este valor en un número entero dentro de un rango específico.

#### Generar un Número Aleatorio Entero en un Rango Dado

Para generar un número entero aleatorio dentro de un rango dado `[min, max]`, seguimos los siguientes pasos:

1. **Multiplicamos** el valor devuelto por `Math.random()` por `(max - min + 1)` para expandir el rango de números posibles. Esto es porque `Math.random()` solo genera números en el rango `[0, 1)`, y multiplicarlo por `(max - min + 1)` nos da un rango de `[0, max - min + 1)`.

2. **Sumamos** el valor mínimo (`min`) para desplazar el rango de manera que comience desde `min` en lugar de `0`.

3. **Aplicamos `Math.floor()`** para redondear el número a su parte entera más baja. Esto nos asegura que el resultado sea un número entero.

#### Fórmula General

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

#### Paso a Paso:

- `Math.random()` genera un número decimal aleatorio entre `0` y `1` (excluyendo `1`).
- Multiplicando `Math.random()` por `(max - min + 1)`, se obtiene un número decimal en el rango `[0, max - min + 1)`.
- Usar `Math.floor()` convierte el número decimal en un número entero, eliminando la parte fraccionaria.
- Finalmente, al sumar `min`, desplazamos el rango para que se ajuste al rango deseado `[min, max]`.

#### Ejemplo Práctico

Supongamos que queremos generar un número entero aleatorio entre `1` y `10`:

```js
const min = 1
const max = 10
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min

console.log(numeroAleatorio) // Ejemplo de salida: 7
```

Cada vez que ejecutes este código, `numeroAleatorio` tendrá un valor aleatorio entre `1` y `10`, ambos incluidos.

### 4. Uso de `.slice()` para Evitar Errores por Referencia en Funciones que Trabajan con Arrays

Cuando trabajamos con **arrays** en JavaScript, es importante recordar que los arrays son **objetos** y se pasan por **referencia** a las funciones. Esto significa que, si una función modifica un array, los cambios también afectarán al array original fuera de la función.

Para evitar modificar el array original y trabajar con una **copia**, se puede utilizar el método `.slice()`. Este método genera una copia superficial de un array, asegurando que cualquier modificación dentro de la función no afecte el array original.

#### Ejemplo:

```js
/**
 * Duplicates each element in the array without modifying the original array.
 *
 * @param {Array<number>} arr - The original array of numbers.
 * @returns {Array<number>} A new array with each element doubled.
 */
const duplicateValues = (arr) => {
  // Crear una copia del array original usando .slice()
  const result = arr.slice()

  // Modificar la copia, no el array original
  for (let i = 0; i < result.length; i++) {
    result[i] *= 2
  }

  return result
}

const originalArray = [1, 2, 3, 4, 5]
const doubledArray = douplicates(originalArray)

console.log('Original Array:', originalArray) // [1, 2, 3, 4, 5]
console.log('Doubled Array:', doubledArray)   // [2, 4, 6, 8, 10]
```

Como ejercicio intelectual, tome el programa anterior y elimine el `.slice()` para hacer la copia del array que se pasa como argumento de la función, corra el prorgama y analice las salidas de consola, para entender la variación en el comportamiento del algoritmo.

#### 4.1 Explicación:

- **Sin `.slice()`**, el array `originalArray` también se modificaría cuando cambiemos los valores en `result`, ya que ambos apuntarían al mismo espacio de memoria.
- Al usar **`.slice()`**, creamos una copia del array original y trabajamos con esa copia, lo que permite **preservar** el contenido original del array.

#### 4.2 Cuándo Utilizar `.slice()`

Se recomienda usar `.slice()` siempre que:

1. Una función que recibe un array **no debe modificar** el array original.
2. Quieres retornar un array **modificado** sin afectar al array que pasaste como argumento.
3. Quieres **evitar errores por referencia** al manipular arrays en múltiples partes del código.

**Este uso es crucial cuando varias funciones trabajan con el mismo array y necesitas asegurarte de que el array original se mantenga intacto.**

### 5. Ejemplos de Uso de Funciones en Problemas con Vectores

A continuación, se presentan ejemplos de funciones que realizan operaciones con vectores, utilizando bucles `for`, `while`, y `do-while` en lugar de métodos avanzados de arrays.

#### Ejemplo 1: Generar un Vector de Elementos Aleatorios en un Rango Dado

```js
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
    const vector = new Array(size)

    for (let i = 0; i < size; i++) {
        vector[i] = rndInt(min, max)
    }

    // Return copy of result vector
    return vector.slice()
}

console.log(generarVectorAleatorio(5, 1, 10)) // Ejemplo de salida: [3, 7, 2, 9, 5]
```

#### Ejemplo/Problema 2: Generar un vector de números Pares
Escriba un programa, con al menos una función (puede usar todas las que crea necesarias), para generar un vector de números pares

#### Ejemplo/Problema 3: Generar un vector de números Impares
Escriba un programa, con al menos una función (puede usar todas las que crea necesarias), para generar un vector de números impares

#### Ejemplo 4/Problema: Generar un vector de números Primos
Escriba un programa, con al menos una función (puede usar todas las que crea necesarias), para generar un vector de números primos

#### Ejemplo 5/Problema: Generar un vector aleatorio de números pares
Escriba un programa para generar un vector de números pares aleatorios. El usuario debe ser capaz de definir la cantidad de elementos a generar y el rango de definción de los mismos.

```js
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
```

### 6. Ejercicios de Programación Aplicando el Concepto de Función en Vectores

A continuación, se proponen algunos ejercicios para practicar:

1. Generar un vector de números aleatorios **No Repetidos** en un rango dado.
2. Crear una programa que verifique si **todos** los elementos de un vector pon **pares**.
3. Implementar una programa que calcule el **Máximo**, el **Mínimo** y el promedio de un vector de `n-longitud` de elementos aleatorios.
4. Desarrollar un programa que **invierta** los elementos de un vector.
5. Implementar un programa que **elimine** los números **primos** de un vector Dado.
