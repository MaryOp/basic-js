const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let members_arr = [];  
    if (((typeof members) !== 'object') | (members == null)) {
      return false
    }
    members_arr = Array.from(members);
    let DreamTeam = '';
    let result_arr = [];
    if ((typeof members_arr !== 'object') | (Array.isArray(members_arr) == false)) {
      return false;
    }

      function isUndefined(input) {
        for (let i = 0; i < input.length; i++) {
          if ((typeof input == undefined) | (input == undefined) | (input == '')) {
          return true;
          }}}
      if (!((members_arr == []) && (members_arr == '') && ((members_arr.some(isUndefined) == true) | (members_arr.some(isUndefined) == undefined)))) {
 
        if (members_arr == '') {
          return false
        }
           members_arr.forEach((element) => {
                if (typeof element == 'string') {        
                  element = element.trimStart();  
                      let el_arr = Array.from(element.toUpperCase())[0];
                      result_arr.push(el_arr);
                }
          })
    }
    else {
      console.log('55')
      return false;
    }

    if (result_arr.some(isUndefined)) {
      return false;
    }

    DreamTeam = result_arr.sort();
    DreamTeam = DreamTeam.join('');
    return DreamTeam;
}

module.exports = {
  createDreamTeam
};
