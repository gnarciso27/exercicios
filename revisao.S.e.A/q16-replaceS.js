function replaceElements(arr, oldValue, newValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === oldValue) {
            arr[i] = newValue;
        }
    }
    return arr;
}

console.log(replaceElements([1, 2, 3, 1, 4], 1, 5));
