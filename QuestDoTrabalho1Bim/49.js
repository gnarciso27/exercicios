function maiorNumber(array){
    if(array.length === 0){
        console.log('sem numeros');
    }
    let maiorNumero = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero= array[i];
        }
    }
    return maiorNumero;
}
const numeros = [9,3,10];
console.log(maiorNumber(numeros));