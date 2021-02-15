/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false


Constraints:

s consists only of printable ASCII characters.

*/

function isPalindrome(string) {
    let result = [];
    let asciiAlphabetStart = 97;
    let asciiAlphabetEnd = 122;

    let asciiNumericStart = 48;
    let asciiNumericEnd = 57;

    for (let i = 0; i < string.length; i++) {
        let character = string[i];
        let charAt = character.toLowerCase().charCodeAt();

        let alphabetCharacter = charAt >= asciiAlphabetStart && charAt <= asciiAlphabetEnd
        let numberCharacter = charAt >= asciiNumericStart && charAt <= asciiNumericEnd

        if (alphabetCharacter || numberCharacter) {
            result.push(character.toLowerCase());
        }
    }

    return result.join() === result.reverse().join();
}

module.exports = isPalindrome;
