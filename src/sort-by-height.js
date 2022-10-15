const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrCut = arr.filter(elem => elem !== -1);
  arrCut.sort((a,b)=> a>b ? 1 : -1)
  arr.forEach((elem,index) => {
    if (elem == -1){
      arrCut.splice(index, 0, elem)
    }
  })
  console.log(arrCut);
  return arrCut
}


sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

module.exports = {
  sortByHeight
};
