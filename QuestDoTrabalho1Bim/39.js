function notaABCDF(nota){
    if(nota == 100){
        return 'A';
    }else if(nota >= 80){
        return 'B';
    }else if(nota >= 70){
        return 'C';
    }else if(nota >= 60){
        return 'D';
    }else{
        return 'F'
    }
}
console.log(notaABCDF(78));