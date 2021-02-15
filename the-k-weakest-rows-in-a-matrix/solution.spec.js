const kWeakestRows = require('./solution');

test('', () => {
    let input = [
        [1,1,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,0,0,0],
        [1,1,1,1,1]
    ]

    expect(kWeakestRows(input, 3)).toEqual([2,0,3]);
});
