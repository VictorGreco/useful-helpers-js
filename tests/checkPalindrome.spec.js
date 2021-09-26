const checkPalindrome = require('../lib/checkPalindrome');

describe('Tests checkPalindrome', () => {
    it('should return true if the palindrome is correct using only alphanumerical characters', () => {
        const simpleOddPalindromeResult = checkPalindrome('eye');
        const simpleEvenPalindromeResult = checkPalindrome('1001');
        const complexPalindromeResult = checkPalindrome('0_0 *-.( ).*_ 0-0');
        const notStringPalindromeResult = checkPalindrome(1001);

        expect(simpleOddPalindromeResult).toBeTruthy();
        expect(simpleEvenPalindromeResult).toBeTruthy();
        expect(complexPalindromeResult).toBeTruthy();
        expect(notStringPalindromeResult).toBeTruthy();
    })

    it('should return false if the parameter is not a valid palindrome with alphanumerical characters', () => {
        const simpleOddPalindromeResult = checkPalindrome('eyes');
        const simpleEvenPalindromeResult = checkPalindrome('o1001');
        const complexPalindromeResult = checkPalindrome('10_0 *-.( ).*_ 0-0');
        const notStringPalindromeResult = checkPalindrome(21001);

        expect(simpleOddPalindromeResult).toBeFalsy();
        expect(simpleEvenPalindromeResult).toBeFalsy();
        expect(complexPalindromeResult).toBeFalsy();
        expect(notStringPalindromeResult).toBeFalsy();
    })
})