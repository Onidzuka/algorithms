const arrayStringsAreEqual = require('./solution');

test('', () => {
    expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toBe(true);
});

test('', () => {
    expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toBe(false);
});
