const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = 1;
  let additionRepeatTimes = 1;
  let separator = '+';
  let additionSeparator = '|';
  let addition_result = '';
    if ((options.repeatTimes !== 0) && (options.repeatTimes !== undefined)) {
      repeatTimes = options.repeatTimes;
      } 
    
    if ((options.additionRepeatTimes !== 0) && (options.additionRepeatTimes !== undefined)) {
      additionRepeatTimes = options.additionRepeatTimes;
      }
    if (options.separator !== undefined) {
      separator = options.separator;
      }
    if ((options.additionSeparator !== undefined) && (options.addition !== undefined)){
      additionSeparator = options.additionSeparator;
      }

    result = '';
    if (options.addition !== undefined) {
    addition_result = (options.addition + additionSeparator).repeat(additionRepeatTimes - 1) + options.addition;
    }
    result_str = str + addition_result;
    result = (result_str + separator).repeat(repeatTimes -1) + result_str;
    
    return result;
}

module.exports = {
  repeater
};


console.log(repeater('12345', { repeatTimes: 5 }))
