# 📋 14-08-2024: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación y Herramientas

### Instalación de Node.js y Configuración del Entorno de Desarrollo

1. **Instalación de Node.js**
   - Descargar Node.js desde el [sitio oficial](https://nodejs.org).
   - Seguir las instrucciones de instalación para tu sistema operativo.
   - Verificar la instalación abriendo una terminal y ejecutando el comando `node -v`.

2. **Configuración del Entorno de Desarrollo (Visual Studio Code)**
   - Descargar Visual Studio Code desde el [sitio oficial](https://code.visualstudio.com).
   - Instalar extensiones recomendadas para JavaScript y Node.js (ej., ESLint, Prettier).
   - Configurar el editor para que se adapte a tus preferencias de desarrollo.

### Introducción a la Línea de Comandos y Ejecución de Scripts en Node.js

1. **Línea de Comandos**
   - Navegar por el sistema de archivos usando comandos básicos (cd, ls, mkdir, etc.).
   - Ejecutar scripts de Node.js desde la terminal.

2. **Ejecutar un Script en Node.js**
   - Crear un archivo JavaScript simple (`hello.js`) y agregar el siguiente código:
     ```javascript
     console.log('Hello, world!');
     ```
   - Ejecutar el script en la terminal con el comando:
     ```bash
     node hello.js
     ```

### Primeros Pasos en JavaScript

#### Conceptos Básicos de Programación

1. **Variables**
   - Declaración de variables usando `var`, `let`, y `const`.
   - Ejemplo:
     ```javascript
     let nombre = 'Juan';
     const edad = 30;
     var ciudad = 'Buenos Aires';
     ```

2. **Tipos de Datos**
   - Primitivos: `number`, `string`, `boolean`, `null`, `undefined`.
   - Ejemplo:
     ```javascript
     let numero = 25;        // number
     let mensaje = 'Hola';   // string
     let esVerdadero = true; // boolean
     let valorNulo = null;   // null
     let sinDefinir;         // undefined
     ```

3. **Operadores**
   - Aritméticos: `+`, `-`, `*`, `/`, `%`.
   - De comparación: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
   - Lógicos: `&&`, `||`, `!`.
   - Ejemplo:
     ```javascript
     let a = 10;
     let b = 5;
     console.log(a + b); // 15
     console.log(a > b); // true
     console.log(a && b); // true (ambos son verdaderos)
     ```

#### Ejemplos y Ejercicios Prácticos Simples

1. **Cálculos Matemáticos Básicos**
   - Escribir un script que sume, reste, multiplique y divida dos números.
   - Ejemplo:
     ```javascript
     let num1 = 8;
     let num2 = 4;
     console.log('Suma:', num1 + num2);
     console.log('Resta:', num1 - num2);
     console.log('Multiplicación:', num1 * num2);
     console.log('División:', num1 / num2);
     ```

2. **Ejercicios Prácticos**
   - Ejercicio 1: Declarar dos variables numéricas y mostrar su suma, resta, multiplicación y división.
   - Ejercicio 2: Crear un script que determine si un número es par o impar.

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
