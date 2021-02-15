const {
    distributeCandies,
    distributeCandies2
} = require('./solution');

test('', () => {
    expect(distributeCandies(10, 3)).toEqual([5,2,3]);
    expect(distributeCandies2(10, 3)).toEqual([5,2,3]);
});

test('', () => {
    expect(distributeCandies(7, 4)).toEqual([1,2,3,1]);
    expect(distributeCandies2(7, 4)).toEqual([1,2,3,1]);
});

test('', () => {
    let expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,5,0,0,0,0,0]

    expect(distributeCandies(600, 40)).toEqual(expected);
    expect(distributeCandies2(600, 40)).toEqual(expected);
});