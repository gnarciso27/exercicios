function rotatearray(arr, k ){
    const n = arr.length;

    if (n === 0) return arr;

    k = ((k % n) + n) % n;

    const result = new Array(n);

    for(let i = 0; i < n; i++){

        result[(i + k) % n ] = arr[i];
        
    }
    return result;
}
console.log(rotatearray([1,2,3,4,5], 2));
console.log(rotatearray([1,2,3,4,5], -2));