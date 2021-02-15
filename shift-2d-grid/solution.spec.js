const shiftGrid = require('./solution');

test('', () => {
    let k = 4;
    let grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]];
    let expectedGrid = [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]];

    expect(shiftGrid(grid, k)).toEqual(expectedGrid);
});

test('', () => {
    let k = 2;
    let grid = [[1],[2],[3],[4],[7],[6],[5]];
    let expectedGrid = [[6],[5],[1],[2],[3],[4],[7]];

    expect(shiftGrid(grid, k)).toEqual(expectedGrid);
});
