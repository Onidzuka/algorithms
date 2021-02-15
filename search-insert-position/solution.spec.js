/*

Task:

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104


--------------------------------


*/

function searchInsert(numbers, target) {
    let low = 0
    let high = numbers.length - 1;

    while (low <= high) {
        let mid = Math.round((low + high) / 2);

        if (numbers[mid] === target) {
            return mid;
        } else if (numbers[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low;
}

// -----------------------------

test('', () => {
    expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    expect(searchInsert([1,3,5,6], 7)).toEqual(4);
    expect(searchInsert([1,3,5,6], 0)).toEqual(0);
    expect(searchInsert([1], 0)).toEqual(0);
});
