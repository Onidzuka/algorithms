const {
    longestCommonPrefix,
    longestCommonPrefix2,
    longestCommonPrefix3,
    longestCommonPrefix4,
} = require('./solution');

test('', () => {
    const input = ["flower","flow","flight","fly","fleet","flask","flip","flame"]

    expect(longestCommonPrefix(input)).toBe('fl');
    expect(longestCommonPrefix2(input)).toBe('fl');
    expect(longestCommonPrefix3(input)).toBe('fl');
    expect(longestCommonPrefix4(input)).toBe('fl');
});

// test('', () => {
//     expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
//     expect(longestCommonPrefix2(["dog","racecar","car"])).toBe('');
//     expect(longestCommonPrefix3(["dog","racecar","car"])).toBe('');
//     expect(longestCommonPrefix4(["dog","racecar","car"])).toBe('');
// });
