const maxPower = function(string) {
    let count = 1;
    let maxCount = 0;

    let currentCharacter;
    let nextCharacter;

    for (let i = 0; i < string.length; i++) {
        currentCharacter = string[i];
        nextCharacter = string[i + 1];

        if (currentCharacter === nextCharacter) {
            count++
        } else {
            count = 1;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}

module.exports = maxPower;
