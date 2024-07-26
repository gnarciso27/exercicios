function calcFatorial(numero){
    let resultado = 1
    for(let i = 1; i <= numero;i++){
        resultado *= i;
    }
    return resultado;
}
console.log(calcFatorial(5));