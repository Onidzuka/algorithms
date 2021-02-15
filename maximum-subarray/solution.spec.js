/*

Task:

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000


Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105


Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

--------------------------------


[-2,1,-3,4,-1,2,1,-5,4]

0, 1
0, 8

---

1, 2
1, 9

---

2, 3
2, 9

---

8, 9

*/

function maxSubArray(numbers) {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i <= numbers.length - 1; i++) {
        for (let j = (i + 1); j <= numbers.length; j++) {
            let subArrayMax = numbers.slice(i, j).reduce((memo, number) => memo += number);

            if (subArrayMax > max) {
                max = subArrayMax;
            }
        }
    }

    return max;
}

// -----------------------------

test('', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    expect(maxSubArray([-1])).toEqual(-1);
});

