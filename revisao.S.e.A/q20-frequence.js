function charFrequency(str) {
    let frequency = {};

    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

console.log(charFrequency("hello"));

console.log(charFrequency("character"));
