function findElement(arr1, arr2) {
    const counts = {};
    for (const num of arr2) {
        counts[num] = (counts[num]|| 0) + 1;
    }
    for(const num of arr1){
        if (!counts[num]){
            return num;
        }
    }
    return undefined;
}
console.log(findElement([1,2,3,4,5], [2,3,1,5]));

