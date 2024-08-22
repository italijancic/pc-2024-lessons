# 🧱 1er Trabajo Prácito
## Introducción a la programación con `Node.js` y `js`

Estos problemas te ayudarán a practicar la entrada de datos, el uso de condiciones con `if`, y algunos conceptos básicos de operaciones matemáticas. Recuerda probar cada solución con diferentes entradas para asegurarte de que tu programa funciona correctamente en todos los casos.

### Incisos

#### **Problema 1: Clasificación de Números**

**Descripción:** Escribe un programa que pida al usuario un número entero y determine si es positivo, negativo o cero.

**Ejemplo de Entrada:**
```zsh
Ingrese un número: 5
```

**Ejemplo de Salida:**
```zhs
El número es positivo.
```

#### **Problema 2: Determinación de Paridad**

**Descripción:** Escribe un programa que pida al usuario un número `entero` y determine si es **par** o **impar**.

**Ejemplo de Entrada:**
```zsh
Ingrese un número: 4
```

**Ejemplo de Salida:**
```zsh
El número es par.
```

#### **Problema 3: Evaluación de Calificaciones**

**Descripción:** Escribe un programa que pida al usuario una `calificación numérica (0-100)` y determine si la calificación es `"Aprobado" (60 o más)` o `"Reprobado" (menos de 60)`.

**Ejemplo de Entrada:**
```zsh
Ingrese su calificación: 75
```

**Ejemplo de Salida:**
```zsh
Aprobado.
```
#### **Problema 4: Comparación de Tres Números**

**Descripción:** Escribe un programa que pida al usuario tres números enteros y determine cuál es el mayor.

**Ejemplo de Entrada:**
```zsh
Ingrese el primer número: 5
Ingrese el segundo número: 3
Ingrese el tercer número: 8
```

**Ejemplo de Salida:**
```zsh
El número mayor es: 8
```

#### **Problema 5: Cálculo de Descuento**

**Descripción:** Escribe un programa que pida al usuario el precio de un producto y la cantidad que desea comprar. Si la cantidad es `3 o más`, aplica un descuento del 10% al precio total.

**Ejemplo de Entrada:**
```zsh
Ingrese el precio del producto: 100
Ingrese la cantidad que desea comprar: 3
```

**Ejemplo de Salida:**
```zsh
El precio total con descuento es: 270
```

### **Problema 6: Descuento mejorado**

**Descripción:** Mejore el código anterior para que, si la cantidad es menor a 3, el programa debe indicar que no aplica para la promoción y mostrar el precio total sin descuento.

**Ejemplo de Entrada 1:**
```zsh
Ingrese el precio del producto: 100
Ingrese la cantidad que desea comprar: 3
```

**Ejemplo de Salida 1:**
```zsh
El precio total con descuento es: 270
```

**Ejemplo de Entrada 2:**
```zsh
Ingrese el precio del producto: 100
Ingrese la cantidad que desea comprar: 2
```

**Ejemplo de Salida 2:**
```zsh
No aplica promoción. El precio total es: 200
```

Claro, aquí tienes el **Problema 6** modificado para incluir el uso de `else if` en la lógica del cálculo del descuento:

### **Problema 7: Cálculo de Desscuentos con Rangos de Descuento**

**Descripción:** Escribe un programa que pida al usuario el precio de un producto y la cantidad que desea comprar. Aplica un descuento basado en la cantidad comprada según las siguientes reglas:
- Si la cantidad es `3 o más`, aplica un descuento del 10% al precio total.
- Si la cantidad es igual a `2`, aplica un descuento del 5% al precio total.
- Si la cantidad es menor a `2`, indica que no aplica para la promoción y muestra el precio total sin descuento.

**Ejemplo de Entrada 1:**
```zsh
Ingrese el precio del producto: 100
Ingrese la cantidad que desea comprar: 4
```

**Ejemplo de Salida 1:**
```zsh
El precio total con descuento es: 360
```

**Ejemplo de Entrada 2:**
```zsh
Ingrese el precio del producto: 100
Ingrese la cantidad que desea comprar: 2
```

**Ejemplo de Salida 2:**
```zsh
El precio total con descuento es: 190
```

**Ejemplo de Entrada 3:**
```zsh
Ingrese el precio del producto: 100
Ingrese la cantidad que desea comprar: 1
```

**Ejemplo de Salida 3:**
```zsh
No aplica promoción. El precio total es: 100
```

### **Problema 8: Determinar si un número es primo**

**Descripción:** Escribe un programa que pida al usuario que ingrese un número entero e imprimar un mensaje indicando si el número ingresado es primo o no:

**Ejemplo de Entrada 1:**
```zsh
Ingrese un número entero: 3
```

**Ejemplo de Salida 1:**
```zsh
El número ingresado es primo
```

**Ejemplo de Entrada 2:**
```zsh
Ingrese un número entero: 4
```

**Ejemplo de Salida 2:**
```zsh
El número ingresado no es primo
```
