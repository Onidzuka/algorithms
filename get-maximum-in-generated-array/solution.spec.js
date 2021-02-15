const getMaximumGenerated = require('./solution');

test('Input: n = 7, Output: 3', () => {
    expect(getMaximumGenerated(7)).toBe(3);
});
