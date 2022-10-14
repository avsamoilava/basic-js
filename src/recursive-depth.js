const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let deep = 1;
    let subDeep = 0;
    arr.forEach(element => {
      subDeep = Array.isArray(element) ? Math.max(this.calculateDepth(element), subDeep) : subDeep;
    });
    return deep+subDeep;
  }
}

module.exports = {
  DepthCalculator
};