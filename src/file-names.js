const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  input_array = names;
  // console.log('input array: ' + input_array);
  // console.log('---------------')
  new_array = [];
  for (let i = 0; i < input_array.length; i++) {
    // console.log(new_array.includes(input_array[i]));

    function add_number(element) {
      return element + '(1)';
    }

    if ((new_array.includes(input_array[i]) )== false) {
      // console.log(input_array + " " + new_array)
      new_array.push(input_array[i]);
      // console.log('if = false')
      // console.log('i = ' + i + '; elem = ' + input_array[i]);
      // console.log('new_array = ' + new_array)
      // console.log('---------------')
    }
    else {
      where_in_new = new_array.indexOf(input_array[i]);
      // console.log(where_in_new);
      new_array.push(add_number(new_array[where_in_new]));
      // console.log('if = true');
      // console.log('i = ' + i + '; elem = ' + input_array[i]);
      // console.log('new_array = ' + new_array);
      // console.log('---------------')
    }
  }
return new_array;
}

module.exports = {
  renameFiles
};

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));

// && (new_array.includes(new_array.add_number(input_array[i])))