function groupByFirstLetter(theArray){
    let obj = {}

    for(let word of theArray){

        let firstLetter = word.charAt(0) // Pega a primeira letra da primeira palavra do array
        let arraySection = []

        for(let wordIndex = 0; wordIndex < theArray.length; wordIndex++){ // Esse loop serve para percorrer todo o array e analisar se mais alguma palavra do array possui a inicial obtida anteriormente.

            if (theArray[wordIndex].charAt(0) === firstLetter){
                arraySection.push(theArray[wordIndex]);
            };
        };

        obj[firstLetter] = arraySection
        arraySection = []
    };

    // Para ficar na ordem do alfabeto :D
    obj = Object.entries(obj).sort()
    obj = Object.fromEntries(obj)

    return obj
};

const arr = ["banana", "apple", "date", "eggplant", "cherry", "avocado", "durian", "dragon fruit", "blueberry"]

console.log(groupByFirstLetter(arr))    