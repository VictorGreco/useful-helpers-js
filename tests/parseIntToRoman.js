const parseIntToRoman = require('../lib/parseIntToRoman');

describe('Tests parseIntToRoman', () => {
    it('should return the correct roman number', () => {

        expect(parseIntToRoman(1)).toBe('I');
        expect(parseIntToRoman(5)).toBe('V');
        expect(parseIntToRoman(29)).toBe('XXIX');
        expect(parseIntToRoman(999)).toBe('CMXCIX');
        expect(parseIntToRoman(9999)).toBe('MMMMMMMMMCMXCIX');
    })

    it('should return false if the parameter not a number', () => {

        expect(parseIntToRoman('')).toBeFalsy();
        expect(parseIntToRoman({})).toBeFalsy();
        expect(parseIntToRoman([])).toBeFalsy();
        expect(parseIntToRoman(null)).toBeFalsy();
    })
})