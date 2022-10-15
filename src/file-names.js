const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let count = {};
  names.forEach(elem => {
    if (count[elem]) {
      count[elem] += 1
    } else count[elem] = 1
  })

  let test = new Set(names);
  if (test.size === names.length) {
    return names
  } else {
    names.forEach(elem => {
      if (!result.includes(elem) || count[elem] == 1) {
        result.push(elem);
      } else {
        let i = 1;
        while (result.includes(`${elem}(${i})`)) {
          i++;
        }
        result.push(`${elem}(${i})`)
      }
    })
    return renameFiles(result)
  }
}

module.exports = {
  renameFiles
};


console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))