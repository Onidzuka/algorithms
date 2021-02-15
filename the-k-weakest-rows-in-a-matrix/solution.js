function kWeakestRows(matrix, k) {
    let result = [];
    let sortedByWeakestRows = sortMatrixByWeakestRows(matrix)

    for (let i = 0; i < k; i++) {
        result.push(sortedByWeakestRows[i][0])
    }

    return result;
}

function sortMatrixByWeakestRows(matrix) {
    return matrix.map(function (row, rowIndex) {
        let numberOfSoldiers = 0;

        for (let i = 0; i < row.length; i++) {
            if (row[i] === 1) {
                numberOfSoldiers++
            } else {
                break;
            }
        }

        return [rowIndex, numberOfSoldiers];
    }).sort(function (a, b) {
        return a[1] - b[1];
    });
}

module.exports = kWeakestRows;
