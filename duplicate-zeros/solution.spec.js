const duplicateZeros = require('./solution');

test('', () => {
    let input = [1,0,2,3,0,4,5,0];
    let expected = [1,0,0,2,3,0,0,4];

    let result = duplicateZeros(input)

    expect(result).toEqual(expected);
});
