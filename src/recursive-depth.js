const { NotImplementedError } = require('../extensions/index.js');

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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let input_arr = arr;
    let depth = 1;
    let depth_count= 1;
    for (let i = 0; i < input_arr.length; i++) {
      if (Array.isArray(input_arr[i]) == true) {
        console.log("i = " + i + " arr[i] = " + input_arr[i] + " depth = " + this.calculateDepth(input_arr[i]))
        // if (this.calculateDepth(arr[i]) !== 1) {
          depth+=this.calculateDepth(input_arr[i]);
          depth_count+=1;
          if (depth_count > depth) {
            depth+=1;
          }
          // depth_add+=this.calculateDepth(arr[i]);
          // depth+=depth_add;
        // }
        // else {
          // depth +=0;
        // }
      }
      else {
        if (Array.isArray(arr[i]) == false) {
          depth+=0;
          depth_count = 1;
          // return depth;
        }
      }
      // depth = 1;
    }

      return depth;
  }
 
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth(([1, 2, 3, [8, [2]], 4, 5, []])))