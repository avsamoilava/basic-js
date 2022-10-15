const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let arr = str.split('');
  let count = 1;
  for (let i = 0; i< arr.length; i++){
    if (arr[i] ==arr[i+1]){
      count++;
    } else {
      result+=`${count}${arr[i]}`;
      count=1;
    }
  }
  console.log(result.split('1').join(''));
  return result.split('1').join('')
}
encodeLine('aabbbc');


module.exports = {
  encodeLine
};
