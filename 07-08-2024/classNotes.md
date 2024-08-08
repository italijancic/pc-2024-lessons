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


