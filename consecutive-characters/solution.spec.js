const maxPower = require('./solution');

test('returns 2', () => {
    expect(maxPower('leetcodeee')).toEqual(3);
});

test('returns 1', () => {
    expect(maxPower('test')).toEqual(1);
});
