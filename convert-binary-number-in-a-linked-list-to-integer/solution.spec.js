const getDecimalValue = require('./solution');

test('', () => {
    const node3 = {value: 1, next: null};
    const node2 = {value: 0, next: node3};
    const node1 = {value: 1, next: node2};

    const list = {head: node1}

    expect(getDecimalValue(list.head)).toBe(5);
});

test('', () => {
    const node = {value: 0, next: null};
    const list = {head: node}

    expect(getDecimalValue(list.head)).toBe(0);
});


test('', () => {
    const node = {value: 1, next: null};

    const list = {head: node}

    expect(getDecimalValue(list.head)).toBe(1);
});

