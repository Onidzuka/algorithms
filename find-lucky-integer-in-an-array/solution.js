/*

Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
Example 4:

Input: arr = [5]
Output: -1
Example 5:

Input: arr = [7,7,7,7,7,7,7]
Output: 7


Constraints:

1 <= arr.length <= 500
1 <= arr[i] <= 500

*/

function findLucky(array) {
    let sortedArray = array.sort()
    let entries = findDuplicates(sortedArray);

    if (entries.length) {
        return entries[entries.length - 1][0];
    } else {
        if (sortedArray[0] === 1 && sortedArray[1] !== 1) {
            return 1;
        } else {
            return -1;
        }
    }
}

function findDuplicates(sortedArray) {
    let map = new Map();

    for (let i = 0; i < sortedArray.length; i++) {
        let currentElement = sortedArray[i];
        let nextElement = sortedArray[i + 1];

        if (currentElement === nextElement) {
            if (map.has(currentElement)) {
                map.set(currentElement, map.get(currentElement) + 1);
            } else {
                map.set(currentElement, 2);
            }
        }
    }

    return [...map.entries()]
        .filter((entry) => entry[0] === entry[1])
        .sort((a, b) => a[0] - b[0])
}

module.exports = findLucky;
