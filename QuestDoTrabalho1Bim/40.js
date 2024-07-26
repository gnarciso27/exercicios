function anoBissexto(ano){
    if(ano %4 === 0 &&  ano %100 !== 0){
        return "ano bissexto";
    }else if(ano %400 === 0){
        return "ano bissexto";
    }else{
        return "esse ano nao é bissexto";
    }
}
console.log(anoBissexto(2024));
console.log(anoBissexto(2000));
console.log(anoBissexto(1900));