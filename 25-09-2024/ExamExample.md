# Ejemplo problemas exámen parcial

## Problema 1
Cree un programa en `js` que le permita ingresar un **número aleatorio** `n` (entero positivo) y le devuelva un vector con todos los números pares menores o iguales (en caso de que el número ingreasdo sea par) a `n`.

**NOTA:** Queda a su criterio (y será evaluado el mismo) definir si es conveniente implementar toda la **lógica necesaria** en una sola o varias funciones.

## Problema 2
Cree un programa que le permita crear un vector aleatorio de `n-números` (donde `n` debe ser un número par) **enteros positivos, negativos y/o cero** en un rango variable definido como entrada de nuestro programa y sobre este vector aletorio le permita conocer las siguientes métricas:

- Promedios de la **primera** y **segunda** mitad del vector. Imprimir un mensaje indicando ambos y cuál es **mayor**
- Promedio de **elementos impares**
- Cantidad **porcentual de ceros** en la totalidad del vector

### Problema3

Desarrolle un programa en `JavaScript` que cumpla con las siguientes especificaciones:

1. **Generación de un vector aleatorio**:
   El programa deberá pedir al usuario que ingrese la **longitud del vector** que quiere generar. Luego, se debe crear un vector de esa longitud, rellenándolo con **números aleatorios enteros positivos**.

2. **Condición especial**:
   A medida que se llena el vector, en el momento en que aparezca el **primer número primo**, el resto del vector debe ser llenado con ceros (`0`).

3. **Impresión de resultados**:
   - El **vector completo** generado debe imprimirse en la consola.
   - Imprimir la **cantidad de elementos nulos** (ceros) y **no nulos** (números distintos de cero).
   - Calcular e imprimir el **porcentaje de elementos nulos** en comparación con los no nulos.
   - Imprimir cuántos **números aleatorios no primos** se generaron antes de que apareciera el primer número primo.

#### Definiciones

- Un número **primo** es un número mayor que 1, divisible solo por 1 y por sí mismo.

#### Ejemplo de ejecución

```zsh
Ingrese la longitud del vector a generr: 10

Vector generado: `[15, 18, 4, 7, 0, 0, 0, 0, 0, 0]`

Resultados:
----------
- Vector generado: [15, 18, 4, 7, 0, 0, 0, 0, 0, 0]
- Cantidad de elementos nulos: 6
- Cantidad de elementos no nulos: 4
- Porcentaje de elementos nulos sobre no nulos: 150%
- Cantidad de números aleatorios no primos generados: 3
```

#### Puntos a considerar

- El programa debe validar que la longitud del vector sea un número positivo mayor que 0.
- Debes asegurarte de que los números aleatorios sean positivos (puedes usar la función `Math.random()` para generarlos y `Math.floor()` para obtener enteros).
- Implementa una función para verificar si un número es primo o no.

#### Restricciones

- No utilices funciones avanzadas de manipulación de arrays como `filter()`, `reduce()`, `map()`, `forEach()`, etre otras.
- Asegúrate de realizar todas las validaciones necesarias.
