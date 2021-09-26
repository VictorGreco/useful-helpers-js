module.exports = function checkPalindrome(str) {
  const matcher = /[\W^_]/g;
  const sanitizedString = `${str}`.toLowerCase().replaceAll(matcher, '');
  const stringLength = sanitizedString.length;
  const sanitizedLength = stringLength % 2 === 0 ? stringLength : parseInt(stringLength/2, 10) +1;

  for (let i = 0; i <= sanitizedLength; i++) {
    if (sanitizedString[i] !== sanitizedString[stringLength - 1 - i]) {

      return false;
    }
  }

  return true;
}