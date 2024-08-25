function SomaZero(arr) {
    let result = [];

    for (let start = 0; start < arr.length; start++) {
        let SomaAtual = 0;
        for (let end = start; end < arr.length; end++) {
            SomaAtual += arr[end];

            if (SomaAtual === 0) {
                result.push(arr.slice(start, end + 1));
            }
        }
    }

    return result;
}

console.log(SomaZero([1, -1, 2, -2, 3, -3]));
