function sumDigitsInString(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!isNaN(char) && char !== ' ') {
            sum += parseInt(char, 10);
        }
    }

    
    return sum;
}

console.log(sumDigitsInString("a1b2c3"));
console.log(sumDigitsInString("abc"));    
