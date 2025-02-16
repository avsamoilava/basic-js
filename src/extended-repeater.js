const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  options.separator = options.separator ? options.separator : '+';
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  options.addition = options.addition === null ? 'null':options.addition;

  let additionArr = (new Array(options.additionRepeatTimes))
    .fill(options.addition, 0)
    .join(options.additionSeparator);

  return (new Array(options.repeatTimes))
    .fill(str, 0).map(elem => elem += additionArr)
    .join(options.separator);
}



module.exports = {
  repeater
};