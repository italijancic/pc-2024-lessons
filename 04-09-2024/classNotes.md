# 📝 04/09/2024: Class Notes

## Introducción al Uso y Manejo de Arrays Unidimensionales en JavaScript
Autor: Ivan, Talijancic

## 1. Definición de Array en Programación

En programación, un **array** (o **arreglo**) es una **estructura de datos** que permite almacenar una colección de elementos bajo un mismo nombre. Los elementos en un array pueden ser de cualquier tipo de dato (números, strings, objetos, etc.) y se almacenan de manera ordenada en posiciones contiguas de memoria.

### Características de los Arrays:

- Los elementos en un array se almacenan en **posiciones indexadas**, comenzando desde el índice `0` hasta `n-1`, donde `n` es la longitud del array.
- Se puede acceder a cada elemento usando su **índice**.
- Los arrays son muy útiles para almacenar listas de datos relacionados, como una lista de números, nombres, o resultados.

### Ejemplo de Array:
Un array que almacena números del 1 al 5:
```
[1, 2, 3, 4, 5]
```
El primer elemento (`1`) está en el índice `0`, el segundo elemento (`2`) está en el índice `1`, y así sucesivamente.

## 2. Declaración e Inicialización de un Array Unidimensional en JavaScript

### Declaración de un Array

En JavaScript, un array se puede declarar utilizando corchetes `[]`:

```javascript
let numeros;  // Declaración de una variable 'numeros'
numeros = []; // Inicialización como un array vacío
```

### Inicialización de un Array con Valores

Podemos inicializar un array con valores al declararlo:

```javascript
let numeros = [1, 2, 3, 4, 5]; // Array de 5 números
let nombres = ["Juan", "Ana", "Luis"]; // Array de 3 nombres
```

### Acceso a los Elementos del Array

Para acceder a un elemento del array, usamos su índice:

```javascript
console.log(numeros[0]); // Imprime: 1
console.log(nombres[2]); // Imprime: Luis
```

### Modificación de Elementos

Podemos modificar los elementos de un array utilizando su índice:

```javascript
nombres[1] = "María"; // Cambia "Ana" por "María"
console.log(nombres); // Imprime: ["Juan", "María", "Luis"]
```

## 3. Recorrer un Array con un Bucle `for`

El bucle `for` es una forma común de recorrer todos los elementos de un array. A continuación, mostramos cómo se hace:

### Ejemplo: Recorrer un Array de Números

```javascript
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  console.log("Elemento en índice " + i + ": " + numeros[i]);
}
```

**Salida esperada:**
```
Elemento en índice 0: 10
Elemento en índice 1: 20
Elemento en índice 2: 30
Elemento en índice 3: 40
Elemento en índice 4: 50
```

### Explicación:

- `i = 0` inicia el bucle con el índice `0`.
- `i < numeros.length` asegura que el bucle recorra solo hasta el último índice.
- `i++` incrementa el índice en 1 en cada iteración.

## 4. Recorrer un Array con un Bucle `while`

El bucle `while` es otra forma de recorrer un array. Es útil cuando no sabemos cuántas iteraciones vamos a necesitar o cuando queremos recorrer un array basado en una condición.

### Ejemplo: Recorrer un Array de Nombres

```javascript
let nombres = ["Ana", "Luis", "María", "Carlos", "Beatriz"];
let i = 0;

while (i < nombres.length) {
  console.log("Nombre en índice " + i + ": " + nombres[i]);
  i++;
}
```

**Salida esperada:**
```
Nombre en índice 0: Ana
Nombre en índice 1: Luis
Nombre en índice 2: María
Nombre en índice 3: Carlos
Nombre en índice 4: Beatriz
```

### Explicación:

- `let i = 0;` inicializa el índice en `0`.
- `while (i < nombres.length)` ejecuta el bloque de código mientras el índice sea menor que la longitud del array.
- `i++` incrementa el índice en 1 después de cada iteración.

## 5. Ejercicios Prácticos

### Ejercicio 1: Suma de Números en un Array

Escribe un programa que calcule la suma de todos los números en un array llamado `numeros`. Utiliza un bucle `for` para recorrer el array.

```javascript
let numeros = [5, 10, 15, 20, 25];
// Tu código aquí
```

### Ejercicio 2: Contar Números Pares

Crea un programa que cuente cuántos números pares hay en un array llamado `numeros`. Usa un bucle `while` para recorrer el array.

```javascript
let numeros = [2, 7, 4, 9, 6, 3, 8];
// Tu código aquí
```

### Ejercicio 3: Buscar un Nombre

Escribe un programa que busque si un nombre específico existe en un array llamado `nombres`. Si el nombre existe, imprime "Nombre encontrado", de lo contrario, imprime "Nombre no encontrado".

```javascript
let nombres = ["Pedro", "Ana", "Luis", "María", "Jose"];
let nombreBuscado = "Luis";
// Tu código aquí
```

### Ejercicio 4: Encontrar el Número Mayor

Escribe un programa que encuentre el número más grande en un array llamado `numeros`. Usa un bucle `for` para resolverlo.

```javascript
let numeros = [15, 42, 7, 81, 23, 56];
// Tu código aquí
```
