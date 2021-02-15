const findLucky = require('./solution');

test('', () => {
    expect(findLucky([2,2,3,4])).toBe(2);
});

test('', () => {
    expect(findLucky([1,2,2,3,3,3])).toBe(3);
});

test('', () => {
    expect(findLucky([7,7,7,7,7,7,7])).toBe(7);
});

test('', () => {
    expect(findLucky([19,12,11,14,18,8,6,6,13,9,8,3,10,10,1,10,5,12,13,13,9])).toBe(1);
});

test('', () => {
    expect(findLucky([2,2,2,3,3])).toBe(-1);
});

test('', () => {
    let input = [5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4];

    expect(findLucky(input)).toBe(10);
});

