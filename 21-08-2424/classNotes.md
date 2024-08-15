# 📋 21-08-2024: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación y Herramientas

### Estructuras de Control

#### Sentencias Condicionales

#### Introducción a las Sentencias `if`, `else if`, `else`

1. **Sintaxis Básica**
   - `if`:
     ```javascript
     if (condición) {
       // código a ejecutar si la condición es verdadera
     }
     ```
   - `else if` y `else`:
     ```javascript
     if (condición1) {
       // código a ejecutar si condición1 es verdadera
     } else if (condición2) {
       // código a ejecutar si condición2 es verdadera
     } else {
       // código a ejecutar si ninguna de las condiciones anteriores es verdadera
     }
     ```

2. **Ejemplo**
   ```javascript
   let edad = 18;
   if (edad < 18) {
     console.log('Menor de edad');
   } else if (edad === 18) {
     console.log('Exactamente 18 años');
   } else {
     console.log('Mayor de edad');
   }
   ```

#### Ejercicios Prácticos

1. **Ejercicio 1**
   - Escribir un script que determine si una persona es mayor de edad (18 años o más).

2. **Ejercicio 2**
   - Escribir un script que evalúe tres notas y determine si un estudiante aprueba (promedio ≥ 6) o reprueba.

### 4. Sentencias de Repetición (Bucles)

#### Introducción a los Bucles `for`, `while`, y `do while`

1. **Bucle `for`**
   - Sintaxis:
     ```javascript
     for (inicialización; condición; incremento) {
       // código a ejecutar en cada iteración
     }
     ```
   - Ejemplo:
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     ```

2. **Bucle `while`**
   - Sintaxis:
     ```javascript
     while (condición) {
       // código a ejecutar mientras la condición sea verdadera
     }
     ```
   - Ejemplo:
     ```javascript
     let i = 0;
     while (i < 5) {
       console.log(i);
       i++;
     }
     ```

3. **Bucle `do while`**
   - Sintaxis:
     ```javascript
     do {
       // código a ejecutar
     } while (condición);
     ```
   - Ejemplo:
     ```javascript
     let i = 0;
     do {
       console.log(i);
       i++;
     } while (i < 5);
     ```

#### Ejercicios Prácticos

1. **Ejercicio 1**
   - Escribir un script que imprima los números del 1 al 10 utilizando un bucle `for`.

2. **Ejercicio 2**
   - Escribir un script que imprima los números del 1 al 10 utilizando un bucle `while`.

3. **Ejercicio 3**
   - Escribir un script que imprima los números del 1 al 10 utilizando un bucle `do while`.
