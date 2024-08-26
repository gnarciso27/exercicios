function expandRange(str){

    if (str.length === 0 || typeof str !== 'string'){
        return null
    }

    const arrResult = [];
    let strParts = str.split(',');

    for(let part of strParts){
        if (part.includes('-')){
            let [numStart, numEnd] = part.split('-');
            numStart = Number(numStart);
            numEnd = Number(numEnd);

            for(; numStart <= numEnd; numStart++){
                arrResult.push(numStart)
            };
        } else {
            arrResult.push(Number(part));
        };
    };

    return arrResult
 };
 

 console.log(expandRange('1-5, 6, 7-12, 13, 14-30'));