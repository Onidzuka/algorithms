const lastStoneWeight = require('./solution');

test('', () => {
    expect(lastStoneWeight([2,7,4,1,8,1])).toEqual(1);
    expect(lastStoneWeight([2,2])).toEqual(0);
});
