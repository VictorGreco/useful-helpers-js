module.exports = function parseIntToRoman(num) {

    if (typeof num !== 'number') {
        return false;
    }

    const digits = `${num}`.split('');
    const UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const HUNDREDS = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const ROMAN_KEYS = [...HUNDREDS, ...TENS, ...UNITS];

    let romanNumber = '';
    let unitPointer = ROMAN_KEYS.length / UNITS.length;

    while (unitPointer--) {
        const romanKeyIndex = +digits.pop() + (unitPointer * 10);

        romanNumber = `${ROMAN_KEYS[romanKeyIndex] || ''}${romanNumber}`;
    }

    return Array(+digits.join('') + 1).join('M') + romanNumber;
}