/**
 * Truncate float number to two decimals
 *
 * @param {number} number - The input number to format.
 * @returns {number} - The formatted number
 */
const numberToTwoDecimals = (number) => parseFloat(number.toFixed(2))

/**
 * Generates a random integer between min and max (inclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Generates a random bomber plan matrix for given planes and objectives.
 * Each plane has a row in the matrix with random bomb values, and each objective has a column.
 * A plane drops bombs until a zero is encountered, then all subsequent values are zero.
 *
 * @param {number} planes - Number of planes (rows).
 * @param {number} objectives - Number of objectives (columns).
 * @param {number} maxValue - Maximum bomb value for each cell.
 * @returns {Array<Array<number>>} - A matrix representing the random bomber plan.
 */
const generateRndBomberPlan = (planes, objetives, maxValue) => {

  const matrix = []
  let hasZero = false

  // For each plane
  for (let i = 0; i < planes; i++) {
    matrix[i] = []
    hasZero = false
    // For each objetive
    for (let j = 0; j < objetives; j++) {
      // Should load zeros?
      if (hasZero) {
        matrix[i][j] = 0
      } else {
        const randomValue = rndInt(0, maxValue)
        if (randomValue) {
          // Random decimal value with two decimal places
          matrix[i][j] = randomValue
        } else {
          matrix[i][j] = 0
          // Set the flag to true if a zero appears
          hasZero = true
        }
      }
    }
  }

  return matrix
}

/**
 * Generates a random vector of distances.
 *
 * @param {number} N - Length of the distance vector.
 * @param {number} min - Minimum distance value.
 * @param {number} max - Maximum distance value.
 * @returns {Array<number>} - A vector of random distances.
 */
const generateRndDistancesVector = (N, min, max) => {
  const vector = []

  for (let i = 0; i < N; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}

/**
 * Calculates the total number of bombs across all planes and objectives.
 *
 * @param {Array<Array<number>>} matrix - A 2D array representing the bomber plan.
 * @returns {number} - The total number of bombs.
 */
const getTotalBombs = (matrix) => {
  let total = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      total += matrix[i][j]
    }
  }

  return total
}

/**
 *
 * @param {2D numeric array} matrix
 * @returns
 */
const getTotalBombsByPlane = (matrix) => {
  const bombsByPlane = []
  let totalBobms = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      totalBobms += matrix[i][j]
    }
    bombsByPlane[i] = totalBobms
    totalBobms = 0
  }

  return bombsByPlane.slice()
}

/**
 * Calculates the total bombs dropped by each plane.
 *
 * @param {Array<Array<number>>} matrix - A 2D array representing the bomber plan.
 * @returns {Array<number>} - An array where each element represents the total bombs for a plane.
 */
const getPercentageOfBobmsByPlane = (matrix) => {
  const totalBobms = getTotalBombs(matrix)
  const bombsByPlane = getTotalBombsByPlane(matrix)
  const percentages = []

  for (let i = 0; i < matrix.length; i++) {
    percentages[i] = numberToTwoDecimals((bombsByPlane[i]/totalBobms)*100)
  }

  return percentages.slice()
}

/**
 * Calculates the percentage of bombs dropped by each plane.
 *
 * @param {Array<Array<number>>} matrix - A 2D array representing the bomber plan.
 * @returns {Array<string>} - An array where each element is the percentage of bombs for a plane, formatted to two decimal places.
 */
const getPercentualByObjetiveAndPlane = (matrix) => {
  const result = []
  const totalBobmsByPlane = getTotalBombsByPlane(matrix)

  for (let i = 0; i < matrix.length; i++) {
    result[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      if (totalBobmsByPlane[i]) {
        result[i][j] = numberToTwoDecimals((matrix[i][j]/totalBobmsByPlane[i])*100)
      } else {
        result[i][j] = 0
      }
    }
  }

  return result.slice()
}

/**
 * Calculates the percentage of bombs for each objective.
 *
 * @param {Array<Array<number>>} matrix - A 2D array representing the bomber plan.
 * @returns {Array<Array<string>>} - A 2D array where each element is the percentage of bombs for each objective, formatted to two decimal places.
 */
const getPercentualByObjetive = (matrix) => {
  const result = []
  const totalBobms = getTotalBombs(matrix)

  for (let i = 0; i < matrix.length; i++) {
    result[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = numberToTwoDecimals((matrix[i][j]/totalBobms)*100)
    }
  }

  return result.slice()
}

/**
 * Calculates the total distances each plane would travel based on objectives reached.
 *
 * @param {Array<number>} distances - A 1D array where each element is the distance to an objective.
 * @param {Array<Array<number>>} plan - A 2D array representing the bomber plan.
 * @returns {Array<number>} - An array where each element is the total distance for a plane.
 */
const getTotalDistancesVector = (disntances, plan) => {

  const totalDistances = []
  let totalDistance = 0

  for (let i = 0; i < plan.length; i++) {
    for (let j = 0; j < plan[i].length; j++) {
      if (plan[i][j]) {
        totalDistance += disntances[j]
      }
    }
    totalDistances[i] = 2*totalDistance
    totalDistance = 0
  }

  return totalDistances.slice()
}

// Test code
const nObjectives = 10
const nPlanes = 10

const distances = generateRndDistancesVector(nObjectives, 200, 1000)
console.log('Random distances vector')
console.table(distances)

const plan = generateRndBomberPlan(nPlanes, distances.length, 10)
console.log('Random bomber plan matrix')
console.table(plan)

console.log('Total bombs to droped: ', getTotalBombs(plan))

console.log('Total distances by plane')
console.table(getTotalDistancesVector(distances, plan))

console.log('Total bombs by plane')
console.table(getTotalBombsByPlane(plan))

console.log('Percentual bombs by plane')
console.table(getPercentageOfBobmsByPlane(plan))

console.log('Percential by objective and plane')
console.table(getPercentualByObjetiveAndPlane(plan))

console.log('Percentual by objective')
console.table(getPercentualByObjetive(plan))
