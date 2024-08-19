# 📋 21-08-2024: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación y Herramientas

### **Diferencias entre `var`, `let`, y `const` en JavaScript**

En JavaScript, existen tres maneras principales de declarar variables: `var`, `let`, y `const`. Cada una tiene sus propias características, usos, ventajas y desventajas. Aquí te explico de forma básica las diferencias:

#### **1. `var`**
- **Ámbito (Scope):** Las variables declaradas con `var` tienen un ámbito de función o global, lo que significa que si se declaran dentro de una función, solo existen dentro de esa función. Si se declaran fuera de cualquier función, son globales.
- **Re-declaración:** Puedes re-declarar una variable con `var` en el mismo ámbito sin generar errores.

**Ejemplo:**
```javascript
function ejemploVar() {
  console.log(nombre); // undefined (por el hoisting)
  var nombre = 'Iván';
  console.log(nombre); // Iván
}

ejemploVar();
```

**Ventajas:** Simple y flexible, funciona en todas las versiones de JavaScript.
**Desventajas:** Puede generar errores difíciles de rastrear debido a su comportamiento de hoisting y su ámbito global.

#### **2. `let`**
- **Ámbito (Scope):** Las variables declaradas con `let` tienen un ámbito de bloque, lo que significa que solo existen dentro del bloque de código en el que fueron definidas (entre llaves `{ }`).
- **Re-declaración:** No puedes re-declarar una variable con `let` en el mismo ámbito, lo que ayuda a evitar errores accidentales.

**Ejemplo:**
```javascript
function ejemploLet() {
  if (true) {
    let nombre = 'Iván';
    console.log(nombre); // Iván
  }
  // console.log(nombre); // Error: nombre no está definido fuera del bloque
}

ejemploLet();
```

**Ventajas:** Más seguro y predecible que `var` debido a su ámbito de bloque.
**Desventajas:** Puede ser un poco más estricto que `var`, pero esto suele ser una ventaja en lugar de una desventaja.

#### **3. `const`**
- **Ámbito (Scope):** Igual que `let`, las variables `const` tienen un ámbito de bloque.
- **Re-declaración:** No se pueden re-declarar ni reasignar después de su declaración.
- **Inmutabilidad:** Aunque `const` impide que se reasigne una variable, no hace inmutables a los objetos o arrays que almacena. Esto significa que puedes modificar las propiedades de un objeto o los elementos de un array declarado con `const`.

**Ejemplo:**
```javascript
const nombre = 'Iván';
// nombre = 'Juan'; // Error: No se puede reasignar un `const`

const persona = { nombre: 'Iván', edad: 30 };
persona.edad = 31; // Esto es válido, aunque la referencia no cambia

console.log(persona); // { nombre: 'Iván', edad: 31 }
```

**Ventajas:** Útil para valores que no deben cambiar, mejora la legibilidad y seguridad del código.
**Desventajas:** No se puede reasignar, lo que puede ser limitante en algunos casos, pero esto es normalmente una ventaja.

### **Recomendaciones y Buenas Prácticas en Node.js con JavaScript**

1. **Usa `let` y `const` en lugar de `var`:**
   - `var` puede ser propenso a errores debido a su hoisting y ámbito global/función. Es recomendable usar `let` para variables que pueden cambiar de valor y `const` para valores que no deberían cambiar.

2. **Prefiere `const` siempre que sea posible:**
   - Declara variables con `const` a menos que necesites reasignarlas. Esto ayuda a prevenir errores accidentales y deja claro que un valor no debería cambiar.

3. **Manten tus variables con un ámbito reducido:**
   - Intenta declarar variables en el ámbito más pequeño posible. Esto reduce el riesgo de colisiones y errores. Por ejemplo, declara variables dentro de funciones o bloques `{}` en lugar de en el ámbito global.

4. **Escribe código claro y legible:**
   - Nombra tus variables de forma descriptiva. Esto mejora la comprensión y mantenibilidad de tu código.

5. **Evita modificar objetos y arrays si están declarados con `const`:**
   - Aunque es posible modificar los valores dentro de un objeto o array declarado con `const`, esto puede ser confuso. Si necesitas modificar un objeto o array, considera usar `let` o asegúrate de que el código sea fácil de entender.

6. **Mantén tu código modular:**
   - Usa `require` o `import` para separar tu código en módulos. Esto facilita la gestión de proyectos grandes y mejora la reutilización de código.

7. **Usa linters y herramientas de formato:**
   - Herramientas como ESLint te ayudarán a mantener un estilo de código consistente y a detectar posibles errores antes de que se conviertan en problemas.

### **Conclusión**

- **`const`**: Úsalo para valores que no deberían cambiar.
- **`let`**: Úsalo cuando necesitas que una variable pueda cambiar de valor.
- **`var`**: **Evítalo en la medida de lo posible** debido a sus limitaciones y comportamiento impredecible.

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

### **Uso del Módulo `prompt` para Leer Entradas de Usuario en Node.js**

En este apunte, aprenderás cómo utilizar un módulo personalizado en Node.js para leer entradas de usuario desde la consola. El módulo usa la biblioteca `readline-sync` para solicitar datos y es ideal para alumnos que están comenzando a trabajar con Node.js y JavaScript.

#### **Leer una Entrada de Texto**

Supongamos que deseas pedirle al usuario su nombre y luego saludarlo. Aquí tienes un ejemplo:

```javascript
import { prompt } from './prompt.js';

const nombre = prompt('Escribe tu nombre: ');
console.log(`Hola, ${nombre}! Bienvenido al curso.`);
```

**Salida Esperada:**
```zsh
Escribe tu nombre: Iván
Hola, Iván! Bienvenido al curso.
```

#### **Leer una Entrada Numérica (Entero)**

Para leer un número entero, debes convertir la cadena de texto (string) ingresada por el usuario a un número entero usando `parseInt`.

```javascript
import { prompt } from './prompt.js';

const edad = parseInt(prompt('¿Cuántos años tienes?: '));
console.log(`Tienes ${edad} años.`);
```

**Salida Esperada:**
```
¿Cuántos años tienes?: 25
Tienes 25 años.
```

#### ** Leer una Entrada Numérica (Flotante)**

Para leer un número con decimales (flotante), utiliza `parseFloat`.

```javascript
import { prompt } from './prompt.js';

const altura = parseFloat(prompt('¿Cuál es tu altura en metros?: '));
console.log(`Mides ${altura} metros.`);
```

**Salida Esperada:**
```zsh
¿Cuál es tu altura en metros?: 1.75
Mides 1.75 metros.
```

**Nota:** Tenga en cuenta que el separador decimal reconocido es el punto.

### **3. Resumen de Buenas Prácticas**

- **Verifica el Tipo de Dato:** Cuando leas entradas numéricas, asegúrate de convertir correctamente las cadenas a números usando `parseInt` para enteros y `parseFloat` para números con decimales.
- **Manejo de Errores:** Considera agregar validaciones para asegurar que el usuario ingrese el tipo de dato esperado (por ejemplo, asegurarse de que el usuario ingrese un número válido).
- **Reutiliza el Módulo:** Usa el módulo `prompt` en tus programas para mantener tu código limpio y modular.
