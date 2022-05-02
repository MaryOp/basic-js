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
function transform(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = array;
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
        // console.log('i = ' + i + '; arr[i] = ' + arr[i])
        // console.log(resultArr)
        resultArr.push(arr[i]);
        break;
      case ('string'):
        switch (arr[i]) {
          case '--discard-prev':
            if ([i] > 0) {
              if (arr[i-2] !== '--discard-next') {
              resultArr.pop();
              }
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
            if (arr[i-2] !== '--discard-next') {
          /*resultArr = */resultArr.push(resultArr[resultArr.length - 1]);
        }
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
  // console.log(Array.isArray(arr))
  return resultArr;
}

module.exports = {
  transform
};

// // let randArr = [50, 15, 14, 85, 96, 12, 1, 0, 63, 36, 58, 20, 1]
// let randArr = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]

// console.log(transform(randArr))
// // console.log(transform( ['--discard-prev', 1, 2, 3]))
