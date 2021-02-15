/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

function longestCommonPrefix(words) {
    let prefix = '';

    if (words.length === 0) {
        return prefix;
    }

    let sortedWords = words.sort();
    let firstWord = sortedWords[0];
    let lastWord = sortedWords[sortedWords.length - 1];

    for (let i = 0; i < lastWord.length; i++) {
        if ( lastWord[i] === firstWord[i]) {
            prefix += lastWord[i]
        } else {
            break;
        }
    }

    return prefix;
}

// Horizontal scanning

function longestCommonPrefix2(words) {
    let prefix = words[0];

    if (words.length === 0) {
        return prefix;
    }

    for (let i = 1; i < words.length; i++) {
        let nextWord = words[i];

        while (nextWord.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);

            if (!prefix) {
                return '';
            }
        }
    }

    return prefix;
}


// Vertical scanning

function longestCommonPrefix3(words) {
    let prefix = words[0];

    if (words.length === 0) {
        return '';
    }

    for (let i = 0; i < words[0].length; i++) {
        let currentCharacter = words[0].charAt(i);

        for (let j = 1; j < words.length; j++) {
            if (currentCharacter !== words[j][i]) {
                return prefix.substring(0, i)
            }
        }
    }

    return prefix;
}

// Divide and conquer

function longestCommonPrefix4(words) {
    if (words.length === 0) {
        return '';
    }

    return findLongestCommonPrefix(words, 0, words.length - 1);
}

function findLongestCommonPrefix(words, leftIndex, rightIndex) {
    if (leftIndex === rightIndex) {
        return words[leftIndex]
    } else {
        let mid = Math.floor((leftIndex + rightIndex) / 2);

        console.log('leftIndex:', leftIndex, ', mid:', mid);
        let left = findLongestCommonPrefix(words, leftIndex, mid);

        console.log('mid + 1:', mid + 1, ', rightIndex:', rightIndex);
        let right = findLongestCommonPrefix(words, mid + 1, rightIndex);

        console.log('left:', left, 'right:', right);
        console.log('common prefix: ', commonPrefix(left, right));

        return commonPrefix(left, right);
    }
}

function commonPrefix(left, right) {
    let min = Math.min(left.length, right.length);

    for (let i = 0; i < min; i++) {
        if (left.charAt(i) !== right.charAt(i)) {
            return left.substring(0, i);
        }
    }

    return left.substring(0, min);
}

/*

"flower","flow","flight","fly","fleet","flask","flip","flame"
"flower","flow","flight","fly"

"flower","flow"

"flower"
"flow"

"flight","fly"
"flight"
"fly"

*/

module.exports = {
    longestCommonPrefix,
    longestCommonPrefix2,
    longestCommonPrefix3,
    longestCommonPrefix4
};
