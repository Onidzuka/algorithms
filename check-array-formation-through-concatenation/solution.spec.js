const canFormArray = require('./solution');

test('Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]', () => {
    expect(canFormArray([91,4,64,78], [[78],[4,64],[91]])).toBe(true);
});

test('Input: arr = [15,88], pieces = [[88],[15]]', () => {
    expect(canFormArray([15,88], [[88],[15]])).toBe(true);
});

test('Input: arr = [49,18,16], pieces = [[16,18,49]]', () => {
    expect(canFormArray([49,18,16], [[16,18,49]])).toBe(false);
});
