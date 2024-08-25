function arrayIntersection(arr1, arr2) {
    let intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!intersection.includes(arr1[i])) {
                    intersection.push(arr1[i]);
                }
            }
        }
    }

    
    return intersection;
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

