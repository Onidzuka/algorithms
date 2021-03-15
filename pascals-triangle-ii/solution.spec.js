/*

Task:

Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?



Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]


Constraints:

0 <= rowIndex <= 33

--------------------------------

[1]

[1,1]

[1,2,1]

[1,3,3,1]

*/

function getRow(rowIndex) {
    let array = new Array(rowIndex + 1).fill(1);

    for (let i = 1; i < rowIndex + 1; i++) {
        for (let j = i; j >= 1; j--) {
            array[j] += array[j - 1];
        }
    }

    return array;
}

// -----------------------------

test('', () => {
    let rowIndex = 3

    expect(getRow(rowIndex)).toEqual([1,3,3,1]);
});
