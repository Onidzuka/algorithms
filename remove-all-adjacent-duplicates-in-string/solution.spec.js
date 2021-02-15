const removeDuplicates = require('./solution');

test('', () => {
    expect(removeDuplicates('abbaca')).toEqual('ca');
});

test('', () => {
    expect(removeDuplicates('aaaaaaaaa')).toEqual('a');
});
