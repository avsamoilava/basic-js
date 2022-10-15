const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  matrix.forEach((elem, index) => {
    if (index === 0) {
      sum += elem.reduce((acc, num) => acc + num, 0)
    } else {
      elem.forEach((e, i) => {
        if (matrix[index - 1][i] !== 0) {
          sum += e
        }
      })
    }
  })
  console.log(sum);
  return sum
}


getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
])

module.exports = {
  getMatrixElementsSum
};