const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  domains.forEach(elem => {
    let arr = elem.split('.');
    console.log(arr)
    if (result[`.${arr[arr.length-1]}`]) {
      result[`.${arr[arr.length-1]}`] += 1
    } else {
      result[`.${arr[arr.length-1]}`] = 1;
    }

    if (result[`.${arr[arr.length-1]}.${arr[arr.length-2]}`]) {
      result[`.${arr[arr.length-1]}.${arr[arr.length-2]}`] += 1
    } else {
      result[`.${arr[arr.length-1]}.${arr[arr.length-2]}`] = 1;
    }

    if (arr[arr.length - 3]) {
      if (result[`.${arr[arr.length-1]}.${arr[arr.length-2]}.${arr[arr.length-3]}`]) {
        result[`.${arr[arr.length-1]}.${arr[arr.length-2]}.${arr[arr.length-3]}`] += 1
      } else {
        result[`.${arr[arr.length-1]}.${arr[arr.length-2]}.${arr[arr.length-3]}`] = 1;
      }
    }
  })
  console.log(result)
  return result
}

getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
])

module.exports = {
  getDNSStats
};