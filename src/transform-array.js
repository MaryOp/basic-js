const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
  // arr.forEach ((element) => {
    console.log(typeof arr[i]);
    console.log((typeof arr[i]) == 'number');
    switch (arr[i]) {
      case ((typeof arr[i]) == 'number'):
        console.log('tyt');
        resultArr = resultArr.push(arr[i]);
        break;
      case ((typeof arr[i]) == 'string'):
        switch (arr[i]) {
          case '--discard-prev':
          resultArr = resultArr.pop();
          break;

          case '--discard-next':
            i+= 1;
            break;

          case '--double-prev':
          resultArr = resultArr.push(resultArr[resultArr.length - 1]);
          break;

          case '--double-next':

          default:
            throw new Error("\'arr\' parameter must be an instance of the Array!");
    }
    break;
    default:
            throw new Error("\'arr\' parameter must be an instance of the Array!");

    }
  // })
}
  return resultArr;
}

// module.exports = {
//   transform
// };

// console.log(transform([1, 2, 3, '--double-prev', 4, 5]))
