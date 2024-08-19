# 📋 28-08-2024: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación y Herramientas

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
