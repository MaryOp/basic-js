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
  if (Array.isArray(arr) == false) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
  // arr.forEach ((element) => {
    // console.log("i = " + i + " arr[i] = " + arr[i] + " "  + (typeof arr[i]));
    // console.log((typeof arr[i]) == 'number');
    switch ((typeof arr[i])) {
      case ('number'):
        // console.log(resultArr);
        /*resultArr = */resultArr.push(arr[i]);
        break;
      case ('string'):
        switch (arr[i]) {
          case '--discard-prev':
            if ([i] > 0) {
          resultArr = resultArr.pop();
            }
            else {
              break;
            }
          break;

          case '--discard-next':
            if (i < (arr.length - 1)) {
              i+= 1;
              break;
            } 
            else {
              break
            }
            break;

          case '--double-prev':
            if ([i] > 0) {
            // console.log("2")
          /*resultArr = */resultArr.push(resultArr[resultArr.length - 1]);
        }
        else {
          break;
        }
          break;

          case '--double-next':
            if (i < (arr.length - 1)) {
                resultArr.push(arr[i+1])
           } 
           else {
             break;
           }
           break;
          default:
            throw new Error("\'arr\' parameter must be an instance of the Array!");
    }
    break;
    default:
      // console.log('here')
            throw new Error("\'arr\' parameter must be an instance of the Array!");

    }
  // })
}
  console.log(arr)
  return resultArr;
}

module.exports = {
  transform
};


console.log(transform( ['--discard-prev', 1, 2, 3]))
