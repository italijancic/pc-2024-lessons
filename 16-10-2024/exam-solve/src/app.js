// import { prompt } from './prompt.js'

// Problema 1:
// ----------
// Usted y su equipo participarán en un concurso de ideas innovadoras sobre meteorología, presentando un
// pluviómetro con sistemas de sensado inteligente. Este dispositivo envía automáticamente las lecturas
// de precipitaciones al final del día a una central encargada de actualizar los datos en un sitio web.

// Sus colegas se han encargado del desarrollo del hardware y del software de adquisición de datos.
// Su tarea consiste en procesar los datos obtenidos por el pluviómetro y prepararlos para su carga
// en el sistema que actualizará el sitio web.
// Los datos que necesita procesar son los siguientes:

// 1. Cantidad de lluvia acumulada para cada día durante los últimos siete días.
// s(El pluviómetro se vacía una vez completados los siete días).
// 2. Promedio de lluvia caída en los últimos siete días.
// 3. Cantidad de lluvia diaria para cada uno de los últimos siete días.
// 4. Valor máximo de lluvia caída y el día en que ocurrió.
// 5. Valor mínimo de lluvia caída y el día en que ocurrió (en caso de que no haya llovido varios días,
// se deben indicar todos los días en los que se dio esta condición).

// Para la demostración del sistema en el concurso, debe generar un vector de registros con valores aleatorios
// entre 0 y 100 (representando milímetros de lluvia), que simule los valores diarios.
// Esto le permitirá verificar que el sistema funciona correctamente y usarlo como ejemplo durante la presentación.

// Nota importante: Debido a limitaciones en el sensor del pluviómetro, este solo puede medir hasta un
// valor máximo de 500 mm. Si la lluvia acumulada supera este valor, debe mostrarse por consola un
// **mensaje de advertencia** indicando que el pluviómetro ha alcanzado su límite. A partir de ese momento,
// todas las mediciones restantes deberán ser descartadas y no se tendrán en cuenta para los análisis mencionados
// previamente (promedio, máximo, mínimo, etc.). Puede cargar el vector con `'X'` (o algún otro caractér, valor o
// símbolo que crea conveniente a los fines), desde el día en el que se haya alcanzado esté límite técnico
// del equipo.

// Consignas:

// 1. Desarrollar el código en JavaScript.
// 2. Simular el vector de precipitaciones con valores aleatorios entre 0 y 100.
// 3. Implementar el cálculo de los valores indicados (promedio, máximo y mínimo).
// 4. Controlar que las mediciones que excedan el límite de 500 mm sean descartadas, y que se muestre el mensaje de advertencia cuando el pluviómetro alcance su límite.

console.log(`---------`)
console.log(`Problem 1:`)
console.log(`---------\r\n`)

/**
 * Generates a random integer between the specified min and max values (inclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number}   - A random integer between min and max.
 */
const rndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
* Generates a weekly rainfall vector (7 days) with random values.
* Stops counting rainfall once the total exceeds the gauge limit, replacing subsequent values with 'X'.
*
* @param {number} limit - The rain gauge limit in mm.
* @returns {Array}      - A 7-element array with daily rainfall values or 'X' when exceeding the gauge limit.
*/
const generateWeeklyRainfall = (limit) => {
  let rainfall = []
  let totalAccumulated = 0
  let warningShown = false

  for (let i = 0; i < 7; i++) {
    let dailyRain = rndInt(0, 100)
    totalAccumulated += dailyRain

    // Check if the total accumulated exceeds the rain gauge limit
    if (totalAccumulated > limit) {
      if (!warningShown) {
        console.log(`Warning: The rain gauge limit was reached on day ${i + 1}. All subsequent measurements will be discarded.`)
        warningShown = true
      }
      rainfall[i] = 'X'  // Discard subsequent values
    } else {
      rainfall[i] = dailyRain
    }
  }

  return rainfall.slice()
}


/**
* Calculates the total accumulated rainfall, excluding days where values are 'X'.
*
* @param {Array} rainfall - The weekly rainfall vector.
* @returns {number}       - The total accumulated rainfall in mm.
*/
const calculateTotalRainfall = (rainfall) => {
  let totalAccumulated = 0
  for (let i = 0; i < rainfall.length; i++) {
    if (rainfall[i] !== 'X') {
      totalAccumulated += rainfall[i]
    }
  }
  return totalAccumulated
}

/**
* Calculates the average rainfall for valid days (excluding 'X').
*
* @param {Array} rainfall - The weekly rainfall vector.
* @returns {number}       - The average rainfall in mm for valid days, or 0 if no valid days exist.
*/
const calculateAverageRainfall = (rainfall) => {
  let validRainfallSum = 0
  // let validDaysCount = 0

  for (let i = 0; i < rainfall.length; i++) {
    if (rainfall[i] !== 'X') {
      validRainfallSum += rainfall[i]
      // validDaysCount++
    }
  }

  return validRainfallSum / 7
  // Or
  // return validDaysCount > 0 ? validRainfallSum / validDaysCount : 0
}

/**
* Finds the maximum rainfall and the day it occurred (1-based index).
*
* @param {Array} rainfall - The weekly rainfall vector.
* @returns {Array}        - A 2-element array: [maximum rainfall in mm, day of maximum rainfall].
*/
const calculateMaxRainfall = (rainfall) => {
  let maxRain = -1
  let maxDay = -1

  for (let i = 0; i < rainfall.length; i++) {
    if (rainfall[i] !== 'X' && rainfall[i] > maxRain) {
      maxRain = rainfall[i]
      maxDay = i + 1
    }
  }
  return [maxRain, maxDay].slice()
}

/**
* Finds the minimum rainfall and the day it occurred (1-based index).
*
* @param {Array} rainfall - The weekly rainfall vector.
* @returns {Array}        - A 2-element array: [minimum rainfall in mm, day of minimum rainfall].
*/
const calculateMinRainfall = (rainfall) => {
  let minRain = 100
  let minDay = -1

  for (let i = 0; i < rainfall.length; i++) {
    if (rainfall[i] !== 'X' && rainfall[i] < minRain) {
      minRain = rainfall[i]
      minDay = i + 1
    }
  }
  return [minRain, minDay].slice()
}

/**
 * Identifies the days with no rainfall (0 mm).
 *
 * @param {Array} rainfall - The weekly rainfall vector.
 * @returns {Array} An array of days where no rainfall occurred (1-based index).
 */
const identifyNoRainDays = (rainfall) => {
  let noRainDays = []
  let dayIndex = 0

  for (let i = 0; i < rainfall.length; i++) {
      if (rainfall[i] === 0) {
          noRainDays[dayIndex] = getDayString(i)
          dayIndex++
      }
  }

  return noRainDays.slice()
}

/**
 * Converts a day index (1-based) to the corresponding day string.
 *
 * @param {number} dayIndex - The day index (1-based).
 * @returns {string}        - The name of the day, or 'Invalid day' if the index is out of range.
 */
const getDayString = (dayIndex) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return dayIndex >= 1 && dayIndex <= 7 ? days[dayIndex - 1] : "Invalid day"
}

// --------------
// Main execution
// --------------
const GAUGE_LIMIT = 500

// Step 1: Generate the weekly rainfall vector
let weeklyRainfall = generateWeeklyRainfall(GAUGE_LIMIT)
// Step 2: Calculate total accumulated rainfall
let totalRainfall = calculateTotalRainfall(weeklyRainfall)
// Step 3: Calculate average rainfall
let averageRainfall = calculateAverageRainfall(weeklyRainfall)
// Step 4: Calculate maximum rainfall and the day it occurred
let maxRainData = calculateMaxRainfall(weeklyRainfall)
// Step 5: Calculate minimum rainfall and the day it occurred
let minRainData = calculateMinRainfall(weeklyRainfall)
// Step 6: Identify days with no rainfall
let noRainDays = identifyNoRainDays(weeklyRainfall)

// Display the results
console.log("Daily rainfall for the last 7 days:")
console.log(weeklyRainfall)
console.log("Total accumulated rainfall:", totalRainfall <= GAUGE_LIMIT ? totalRainfall : "Exceeded")
console.log("Average rainfall:", averageRainfall.toFixed(2), "mm")
console.log("Maximum rainfall:", maxRainData[0], "mm on day", getDayString(maxRainData[1]))
console.log("Minimum rainfall:", minRainData[0], "mm on day", getDayString(minRainData[1]))
console.log("Days with no rainfall: ")
console.log(noRainDays)

// Problema 2:
// ----------

// El algoritmo funciona de la siguiente manera:

// 1. Repetir el siguiente proceso hasta que el array esté ordenado:
//    - Recorrer el array de izquierda a derecha.
//    - Comparar cada elemento con el siguiente.
//    - Si un elemento es mayor que el siguiente, **intercambiar** sus posiciones.
// 2. Después de cada recorrido, el mayor de los elementos no ordenados "flotará" hasta el final del array.

// El pseudocódigo para el algoritmo de ordenamiento es el siguiente:

// ```pseudocode
// ALGORITMO Ordenamiento (array)
//     PARA i desde 0 hasta longitud del array - 1
//         PARA j desde 0 hasta longitud del array - 1 - i
//             SI array[j] > array[j + 1] ENTONCES
//                 INTERCAMBIAR array[j] con array[j + 1]
//             FIN SI
//         FIN PARA
//     FIN PARA
// FIN ALGORITMO
// ```

console.log()
console.log(`---------`)
console.log(`Problem 2: Bubble Sort`)
console.log(`---------\r\n`)

const bubbleSort = (array) => {
  let n = array.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }

  return array.slice()
}

// Prueba con un ejemplo
let array = [5, 1, 4, 2, 8]
console.log(`Unsorted array:`)
console.log(array)
let sortedArray = bubbleSort(array)
console.log(`Unsorted array:`)
console.log(sortedArray)

console.log()
