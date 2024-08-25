function concatenateArrays(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length && i < array2.length; i++) {
        result.push(array1[i] + array2[i]);
    }

    for (let i = array2.length; i < array1.length; i++) {
        result.push(array1[i]);
    }

    for (let i = array1.length; i < array2.length; i++) {
        result.push(array2[i]);
    }

    return result; 
}
