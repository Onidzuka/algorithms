const romanToInt = require('./solution');

test('I -> 1', () => {
    expect(romanToInt('I')).toBe(1);
});

test('II -> 2', () => {
    expect(romanToInt('II')).toBe(2);
});

test('III -> 3', () => {
    expect(romanToInt('III')).toBe(3);
});

test('IV -> 4', () => {
    expect(romanToInt('IV')).toBe(4);
});

test('V -> 5', () => {
    expect(romanToInt('V')).toBe(5);
});

test('VI -> 6', () => {
    expect(romanToInt('VI')).toBe(6);
});

test('VII -> 7', () => {
    expect(romanToInt('VII')).toBe(7);
});

test('VIII -> 8', () => {
    expect(romanToInt('VIII')).toBe(8);
});

test('IX -> 9', () => {
    expect(romanToInt('IX')).toBe(9);
});

test('X -> 10', () => {
    expect(romanToInt('X')).toBe(10);
});
