const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let param = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    let transformArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!param.includes(arr[i])) {
        transformArr.push(arr[i])
      } else
      if (arr[i] == '--discard-prev' && arr[i - 2] !== '--discard-next') {
        if (arr[i - 1] !== undefined) transformArr = transformArr.slice(0, -1);
      } else
      if (arr[i] == '--discard-next') {
        ++i
      } else
      if (arr[i] == '--double-prev' && !param.includes(arr[i - 1]) && arr[i - 2] !== '--discard-next') {
        if (arr[i - 1] !== undefined) transformArr.push(arr[i - 1])
      } else
      if (arr[i] == '--double-next') {
        if (arr[i + 1] !== undefined) transformArr.push(arr[i + 1]);
      }

    }
    return transformArr
  }
}


module.exports = {
  transform
};