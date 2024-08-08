# 📋 07-08-2024: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación y Herramientas

### Conceptos Elementales de la Informática

#### Hardware

##### Componentes Físicos de una Computadora

**CPU (Unidad Central de Procesamiento)**
   - **Descripción**: Es el cerebro de la computadora, responsable de ejecutar instrucciones de programas y procesar datos.
   - **Componentes**:
     - **Unidad de Control (CU)**: Dirige las operaciones de la CPU, diciéndole a las otras partes de la computadora qué hacer.
     - **Unidad Aritmética y Lógica (ALU)**: Realiza operaciones aritméticas y lógicas.
   - **Interacción**: La CPU se comunica con la memoria para obtener datos e instrucciones y con los dispositivos de entrada/salida para interactuar con el usuario.

**Memoria**
   - **RAM (Memoria de Acceso Aleatorio)**:
     - **Descripción**: Memoria volátil que almacena datos e instrucciones temporales que la CPU necesita.
     - **Función**: Permite el acceso rápido a los datos que se están utilizando actualmente.
   - **ROM (Memoria de Solo Lectura)**:
     - **Descripción**: Memoria no volátil que contiene instrucciones permanentes, como el firmware del sistema.
     - **Función**: Almacena el software esencial para el arranque de la computadora.

**Disco Duro (HDD) / Unidad de Estado Sólido (SSD)**
   - **Descripción**: Dispositivos de almacenamiento de datos no volátiles.
   - **Función**: Almacenan el sistema operativo, aplicaciones y archivos de datos del usuario.
   - **Interacción**: La CPU lee y escribe datos en el disco duro/SSD a través del controlador de almacenamiento.

**Placa Madre (Motherboard)**
   - **Descripción**: La placa principal de la computadora que conecta todos los componentes hardware.
   - **Función**: Proporciona conectividad entre la CPU, la memoria, los dispositivos de almacenamiento y otros componentes.
   - **Interacción**: Actúa como el centro de comunicación entre todos los componentes del sistema.

**Tarjeta Gráfica (GPU)**
   - **Descripción**: Unidad de procesamiento dedicada a manejar y renderizar gráficos.
   - **Función**: Acelera el procesamiento de imágenes, videos y animaciones.
   - **Interacción**: Se comunica con la CPU y la memoria para procesar datos gráficos y enviar la salida a la pantalla.

**Periféricos de Entrada y Salida**
   - **Dispositivos de Entrada**: Teclado, ratón, escáner, micrófono.
   - **Dispositivos de Salida**: Monitor, impresora, altavoces.
   - **Interacción**: Permiten al usuario interactuar con la computadora y recibir información de ella.

#### Funciones de Cada Componente y Cómo Interactúan Entre Sí

- **CPU y Memoria**: La CPU lee datos e instrucciones desde la memoria RAM para procesarlos. La RAM proporciona un acceso rápido a estos datos temporales.
- **CPU y Disco Duro/SSD**: La CPU solicita datos del disco duro/SSD cuando no están presentes en la RAM. Estos datos pueden ser programas, archivos o datos necesarios para las operaciones.
- **Placa Madre**: Facilita la comunicación entre la CPU, la memoria, el disco duro/SSD, y otros componentes a través de buses y circuitos integrados.
- **CPU y GPU**: La CPU delega tareas gráficas a la GPU para mejorar el rendimiento en aplicaciones que requieren procesamiento gráfico intensivo.
- **Periféricos de Entrada/Salida y CPU**: Los dispositivos de entrada envían datos a la CPU para su procesamiento, y los dispositivos de salida muestran los resultados procesados por la CPU.

#### Software

##### Sistema Operativo (OS)

- **Descripción**: Un conjunto de programas que administra los recursos de hardware de la computadora y proporciona servicios comunes a los programas de aplicación.
- **Funciones Principales**:
  - **Gestión de Procesos**: Administra la ejecución de múltiples procesos, asegurando que cada uno reciba tiempo de CPU.
  - **Gestión de Memoria**: Controla la asignación y liberación de memoria a los programas.
  - **Gestión de Archivos**: Maneja la creación, lectura, escritura y borrado de archivos en los dispositivos de almacenamiento.
  - **Gestión de Dispositivos**: Coordina la comunicación entre la CPU y los dispositivos periféricos.
- **Ejemplos de OS**: Windows, macOS, Linux, Android, iOS.

##### Software de Control (Drivers)

- **Descripción**: Programas que permiten que el sistema operativo se comunique con el hardware.
- **Funciones**:
  - **Interfaz entre OS y Hardware**: Traduce las instrucciones del sistema operativo en comandos que el hardware puede entender.
  - **Compatibilidad**: Permite que diferentes tipos de hardware funcionen con el mismo sistema operativo.
- **Ejemplo**: Un driver de impresora permite que la computadora envíe datos a la impresora en un formato que la impresora puede procesar.

##### Software de Aplicación

- **Descripción**: Programas diseñados para realizar tareas específicas para el usuario.
- **Tipos de Software de Aplicación**:
  - **Procesadores de Texto**: Software para crear y editar documentos de texto (ej., Microsoft Word, Google Docs).
  - **Navegadores Web**: Software para acceder y navegar por internet (ej., Google Chrome, Mozilla Firefox).
  - **Software de Diseño Gráfico**: Programas para crear y editar imágenes y gráficos (ej., Adobe Photoshop, CorelDRAW).
  - **Software de Comunicación**: Aplicaciones para enviar y recibir mensajes (ej., WhatsApp, Slack).
- **Función**: Facilitar tareas específicas y mejorar la productividad del usuario.
- **Interacción con el OS**: Las aplicaciones se ejecutan sobre el sistema operativo, utilizando sus servicios para acceder a hardware, gestionar archivos y procesar datos.

---
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

---

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

---

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
