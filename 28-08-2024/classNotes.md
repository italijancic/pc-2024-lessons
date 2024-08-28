# 📋 28-08-2024: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación

### 4. Sentencias de Repetición (Bucles)

#### Introducción a los Bucles `for`, `while`, y `do while`

En programación, los bucles permiten `repetir una secuencia de instrucciones múltiples veces` sin tener que escribir el mismo código repetidamente. Son esenciales para realizar tareas repetitivas, como imprimir una lista de números o ejecutar una acción varias veces.

1. **Bucle `for`**
   - **Sintaxis:**
     ```javascript
     for (inicialización; condición; incremento) {
       // código a ejecutar en cada iteración
     }
     ```
   - **Ejemplo:**
     ```javascript
     for (let i = 0; i < 5; i++) { // Inicializa i en 0, ejecuta el bucle mientras i < 5, incrementa i en cada iteración
       console.log(i); // Imprime el valor de i
     }
     ```
   - El bucle `for` se utiliza cuando conocemos de antemano el número de veces que queremos que se ejecute el bucle.

2. **Bucle `while`**
   - **Sintaxis:**
     ```javascript
     while (condición) {
       // código a ejecutar mientras la condición sea verdadera
     }
     ```
   - **Ejemplo:**
     ```javascript
     let i = 0;
     while (i < 5) { // Ejecuta el bucle mientras la condición i < 5 sea verdadera
       console.log(i); // Imprime el valor de i
       i++; // Incrementa i en 1 en cada iteración
     }
     ```
   - El bucle `while` se utiliza cuando no sabemos cuántas veces se ejecutará, y la repetición depende de una condición que puede cambiar durante la ejecución.

3. **Bucle `do while`**
   - **Sintaxis:**
     ```javascript
     do {
       // código a ejecutar
     } while (condición);
     ```
   - **Ejemplo:**
     ```javascript
     let i = 0;
     do {
       console.log(i); // Imprime el valor de i
       i++; // Incrementa i en 1
     } while (i < 5); // Continúa el bucle mientras la condición i < 5 sea verdadera
     ```
   - El bucle `do while` es similar al `while`, pero garantiza que el código dentro del bucle se ejecute al menos una vez, ya que la condición se evalúa después de la primera ejecución.

#### Ejercicios Prácticos

1. **Ejercicio 1:**
   - Escribir un script que imprima los números del 1 al 10 utilizando un bucle `for`.

2. **Ejercicio 2:**
   - Escribir un script que imprima los números del 1 al 10 utilizando un bucle `while`.

3. **Ejercicio 3:**
   - Escribir un script que imprima los números del 1 al 10 utilizando un bucle `do while`.

4. **Ejercicio 4:**
   - Escribir un script que imprima solo los números pares del 1 al 20 utilizando un bucle `for`.

5. **Ejercicio 5:**
   - Crear un script que calcule la suma de los números del 1 al 100 utilizando un bucle `while`.

6. **Ejercicio 6:**
   - Escribir un programa que pida al usuario que ingrese números hasta que escriba un número negativo, usando un bucle `do while`.

#### Errores Comunes

- **Bucles infinitos:** Ocurren cuando la condición del bucle siempre es verdadera. Por ejemplo, un bucle `while (true)` nunca terminará a menos que haya una instrucción dentro del bucle que lo detenga, como `break`.
- **Condiciones mal formuladas:** Asegúrate de que las condiciones en los bucles sean correctas y se actualicen en cada iteración para evitar comportamientos inesperados.
