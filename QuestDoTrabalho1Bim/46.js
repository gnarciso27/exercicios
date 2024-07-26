function encontrarmaiorNumero(array){
    if(array.length === 0){
        console.log('lista sem numero')
    }
    let maiorNumero = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i]> maiorNumero){
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
}
const lista = [1,3,2,6,9,7,4];
console.log(encontrarmaiorNumero(lista));