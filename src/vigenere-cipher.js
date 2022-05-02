const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(option) {
    if (option == false) {
      this.direction = 'reverse';
    }
    else {
      this.direction = 'direct';
    }
  }
  encrypt(options) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let encryptedMessage;
    let key;
    if (options !== undefined) {
        
    if (options.length < 2 ) {
      throw Error('Incorrect arguments!')
    }
    else {
    if (options.encryptedMessage !== undefined) {
      encryptedMessage = options.encryptedMessage;
  }
    if (options.key !== undefined) {
    key = options.key; 
    }
    if ((encryptedMessage == undefined) | (key == undefined) ) {
      throw Error('Incorrect arguments!')
    }
  }
  }
  else {
  throw new Error('Incorrect arguments!')
  }
  }
  decrypt(options) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let encryptedMessage;
    let key;
    if (options !== undefined) {
        
    if (options.length < 2 ) {
      throw Error('Incorrect arguments!')
    }
    else {
    if (options.encryptedMessage !== undefined) {
      encryptedMessage = options.encryptedMessage;
  }
    if (options.key !== undefined) {
    key = options.key; 
    }
    if ((encryptedMessage == undefined) | (key == undefined) ) {
      throw Error('Incorrect arguments!')
    }
  }
  }
  else {
  throw new Error('Incorrect arguments!')
  }
  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt())