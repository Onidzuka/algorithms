const findKthPositive = require('./solution');

test('', () => {
    expect(findKthPositive([2,3,4,7,11], 5)).toEqual(9);
});

test('', () => {
    expect(findKthPositive([1,2,3,4], 2)).toEqual(6);
});
