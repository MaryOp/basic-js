const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == '' | date == undefined) {
    return 'Unable to determine the time of year!'
  };
    
  if ((typeof date !== 'object') | (typeof date.valueOf() !== 'number')){
    return 'Invalid date!';
  }
  today = new Date();
  // console.log(typeof date + ' ' + date)
  current_date = (today.getFullYear() + " " + today.getMonth() + " " + today.getDate())
  input_date = (date.getFullYear() + " " + date.getMonth() + " " + date.getDate());
  if (input_date == current_date) {
    return 'Invalid date!';
  }
  let month = date.getMonth();
  switch (month) {
    case 0:
    case 1: 
    case 11:
      return 'winter';
    case 3:
    case 4:
    case 2:
      return 'spring';
    case 6:
    case 7:
    case 5:
      return 'summer';
    case 9:
    case 10:
    case 8:
      return 'autumn';
    default:
      throw new NotImplementedError ("Invalid date!");
  }

}

module.exports = {
  getSeason
};


const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));


// console.log(fakeDate)
// console.log(getSeason(fakeDate))

console.log(getSeason(new Date(1582, 5, 24, 3, 30, 22, 496)));

console.log(typeof (new Date(1582, 5, 24, 3, 30, 22, 496)));