function calcMedia(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];

    }
    let media = soma / array.length;
    return media;
    
}
const numeros = [2,3,4,5,6];
console.log(calcMedia(numeros));