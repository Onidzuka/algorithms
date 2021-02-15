const isPalindrome = require('./solution');

test('1221', () => {
    expect(isPalindrome(1221)).toBe(true);
});

test('12321', () => {
    expect(isPalindrome(12321)).toBe(true);
});

test('-121', () => {
    expect(isPalindrome(-121)).toBe(false);
});

test('10', () => {
    expect(isPalindrome(10)).toBe(false);
});

test('1234', () => {
    expect(isPalindrome(1234)).toBe(false);
});

test('9999', () => {
    expect(isPalindrome(9999)).toBe(true);
});
