## 1er Exámen Parcial
Autor: Talijancic Ivan

#### Problema 1
Escriba una **función** en `JavaScript` que le permita crear un vector aleatorio de `n-elementos` **enteros (positivos, negativos y/o cero)**, para lo cuál:

- Dicha función tomará los siquientes argumentos:
  1. El valor mínimo del rango de definición del vector aleatorio
  2. El valor máximo del rango de definición del vector aleatorio
  3. La cantidad de elementos del vector aleatorio

Se presenta a continuación un código de ejemplo, visualizar la funcionalidad del código a desarrollar:

```js
// Ejemplo de uso
const minValue = -10
const maxValue = 10
const vectorSize = 5

const randomVector = getRandomVector(minValue, maxValue, vectorSize)
console.log(randomVector)

// Salida de consola
[ -10, 8, 0, 1, 7 ]
```

Para la función desarrollada se pide:

- Diagrama de flujo
- Pseudocódigo

#### Problema 2
Utilizando la **función desarrollada en el inciso anterior** escribir una programa que le permita, para un vector aleatorio creado:

1. Hallar el valor `máximo` y `mínimo` de dicho vector
2. Hallar el `promedio` de todos los valores
3. Determinar si el **promedio** de los valores en las **posiciones pares** es `mayor, menor` o `igual` al promedio de los valores en las **posiciones impares**. Para indicar el resultado de este análisis debe `imprimir por consola`, alguno de los siguientes mensajes:
    - El promedio de las posiciones pares es mayor
    - El promedio de las posiciones pares es menor
    - Los promedios son iguales
