/*

Task:

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

--------------------------------

[1] ->

[1,1] -> 0,1

[1,2,1] -> 0,1; 1,2

[1,3,3,1] -> 0,1; 1,2; 2;3

[1,4,6,4,1] -> 0,1; 1,2; 2,3; 3,4

[1,5,10,10,5,1] -> 6

*/

function generate(pyramidSize) {
    let pyramid = []

    for (let i = 0; i < pyramidSize; i++) {
        let row = new Array(i + 1).fill(1);

        if (row.length > 2) {
            let prevRow = pyramid[i - 1];

            for (let j = 0; j < prevRow.length; j++) {
                if (prevRow[j + 1]) {
                    row[j + 1] = prevRow[j] + prevRow[j + 1]
                }
            }
        }

        pyramid.push(row);
    }

    return pyramid;
}

// -----------------------------

test('', () => {
    let output = [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]

    expect(generate(5)).toEqual(output);
});
