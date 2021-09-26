module.exports = function rot13(str) {
    const DECODED_KEY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
    const SHIFT_CONSTANT = 13;
  
    return str
      .split('')
      .map(character => {
        const indexInDecodedKey = DECODED_KEY.indexOf(character);
        
        if (indexInDecodedKey >= 0) {
          let translateIndex = indexInDecodedKey + SHIFT_CONSTANT;
  
          translateIndex = translateIndex >= DECODED_KEY.length ? translateIndex - DECODED_KEY.length : translateIndex;
  
          return DECODED_KEY[translateIndex];
        }
  
        return character;
      })
      .join('');
  }