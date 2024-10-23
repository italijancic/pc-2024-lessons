# 📋 23-10-2024: Class Notes
Autor: Ivan Talijancic

## Matrices en `.js`: (2D Arrays)

### 1. Concepto de Arrays Bidimensionales en Programación

Un array **bidimensional** es una estructura de datos que permite almacenar elementos en una tabla o matriz con dos
dimensiones: `filas` y `columnas`. Cada elemento se accede a través de dos índices, uno que representa la fila y otro
que representa la columna. Por ejemplo, una matriz de 3 filas y 3 columnas:

```js
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

	•	El valor 1 está en la posición [0][0].
	•	El valor 5 está en la posición [1][1].

### 2. Definición de un Array Bidimensional en JavaScript

En `JavaScript`, un array bidimensional se puede definir como un **array de arrays**, es decir, un array en el que
cada elemento es otro array.

Ejemplo de Declaración e Inicialización:

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

En este caso, `matriz` es un **array** con 3 filas y 3 columnas. Tenga presente que **cada fila es un array independiente.**

#### Declaración de un Array Vacío:

Puedes declarar un array bidimensional vacío y llenarlo más adelante:

```js
// Declaración e inicialización de un array vacío
let matriz = []
```

#### Determinación del Número de Filas

El número de filas de una matriz se puede obtener directamente accediendo a la propiedad .length del array principal,
ya que cada fila es un array dentro de este.

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let filas = matriz.length
console.log("Cantidad de filas: " + filas)
```

#### Determinación del Número de Columnas

Para determinar la cantidad de columnas, es necesario acceder a una de las filas (por lo general, la primera) y
luego aplicar la propiedad .length a ese array. Esto asume que todas las filas tienen la misma cantidad de
columnas (matriz regular).

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let columnas = matriz[0].length;
console.log("Cantidad de columnas: " + columnas)
```

#### Uso de `new Array()` para Declarar una Matriz

En `.js`, podemos utilizar el constructor `Array()` para declarar arrays de una forma más concisa. En este caso,
podemos inicializar la matriz utilizando `Array()` para crear primero un array de filas, y luego inicializar cada
fila con el número de columnas.

```js
let filas = 4
let columnas = 4

let matriz = new Array(filas)

for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(columnas)
  for (let j = 0; j < matriz[i].length; j++) {
    matriz[i][j] = 0
  }
}

console.log(matriz)
```

### 3. Acceso a Elementos de un Array Bidimensional

Para acceder a un elemento de un array bidimensional, necesitamos dos índices: el índice de la fila y el índice de la columna.

Ejemplo:

```js
let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
]

console.log(matriz[1][2])
```

#### Modificación de un Elemento:

También puedes modificar los elementos del array usando sus índices:

```js
matriz[2][0] = 100
console.log(matriz[2][0])
```

### 4. Recorrer un Array Bidimensional

Para recorrer un array bidimensional, se necesitan **dos bucles anidados.** Queda a elección de usted como programador
definir el sentido del recorrido, pudiendo este ser por filas o columnas; según las necesidades del caso.

#### Ejemplo con Bucle for:

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log("Elemento en [" + i + "][" + j + "]: " + matriz[i][j])
  }
}
```

#### Ejemplo con Bucle while:

```js
let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

let i = 0
while (i < matriz.length) {
  let j = 0
  while (j < matriz[i].length) {
    console.log("Elemento en [" + i + "][" + j + "]: " + matriz[i][j])
    j++
  }
  i++
}
```

### 5. Algoritmos para Inicialización de un Array Bidimensional

#### Inicialización con Cero:

Podemos inicializar una matriz con todos sus valores a cero utilizando un bucle for.

```js
let filas = 3
let columnas = 3
let matriz = []

for (let i = 0; i < filas; i++) {
  matriz[i] = []
  for (let j = 0; j < columnas; j++) {
    matriz[i][j] = 0
  }
}

console.log(matriz)
```

### 6. Conclusión

Los arrays bidimensionales son útiles para **almacenar y manipular datos en forma de tablas.**
Es fundamental dominar su **declaración, inicialización, acceso y recorrido** utilizando bucles para realizar cálculos
o transformaciones sobre ellos.

#### 7. Ejercicios Prácticos

#### Ejercicio 1: Crear una Matriz de Números Enteros
Escribe un programa que inicialice una función cargada con número aleatorios enteros.

#### Ejercicio 2: Métricas sobre matrices
Escribe un programa que mediante el uso de varias funciones, le permita:

  - Inicializar una matriz de `NxM` cargada con valores aleatorios enteros.
  - Calcula la suma de la totalidad de los elementos.
  - Determine el máximo y su posición (el primero que encuentre, no se tienen en cuenta repeticiones).
  - Determine el mínimo y su posición (el primero que encuentre, no se tienen en cuenta repeticiones).
  - El promedio de la totalidad de los elementos.
  - La suma de cada fila. Tener en cuenta que el resultado de esta operación será un vector.
  - La suma de cada columna. Tener en cuenta que el resultado de esta operación será un vector.

#### Ejercicio 3: Producto matricial
Escribe una función que realice el producto matricial de dos matrices dadas.

#### Ejercicio 4: Transponer una Matriz
Escribe una función que calcule la matriz transpuesta, donde las filas de la matriz original se convierten en las columnas de la nueva matriz.

