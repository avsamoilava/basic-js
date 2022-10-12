const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let testArr = [];

  let nArr = n.toString().split('');
  console.log(nArr);
  nArr.forEach((elem, index) => {
    let k = [...nArr];
    k.splice(index, 1);
    testArr.push(parseInt( k.join('')))
  })
 
  return Math.max.apply(null, testArr)
}

deleteDigit(152)


module.exports = {
  deleteDigit
};
