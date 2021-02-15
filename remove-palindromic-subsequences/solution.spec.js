const removePalindromeSub = require('./solution');

test('', () => {
    expect(removePalindromeSub('ababa')).toEqual(1);
});

test('', () => {
    expect(removePalindromeSub('abb')).toEqual(2);
});
