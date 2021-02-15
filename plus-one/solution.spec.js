/*

Task:

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.



Example 1:

Output: [1,2,4]
Input: digits = [1,2,3]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]


Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9

--------------------------------

[1,2,3] => [1,2,4]

[9,9] => [1,0,0]

[8, 9, 8] => [8, 9, 0]

*/

function plusOne(digits) {
    let length = digits.length;

    for (let i = length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    let newNumber = new Array(length + 1).fill(0);
    newNumber[0] = 1;

    return newNumber;
}

// -----------------------------

test('', () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4]);
    expect(plusOne([9,9])).toEqual([1,0,0]);
    expect(plusOne([9])).toEqual([1,0]);
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
});
