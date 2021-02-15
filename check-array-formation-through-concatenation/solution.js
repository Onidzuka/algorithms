function canFormArray(array, pieces) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < pieces.length; j++) {
            if (array[i] === pieces[j][0]) {
                result.push(pieces[j])
            }
        }
    }

    return array.join() === result.join();
}

module.exports = canFormArray;
