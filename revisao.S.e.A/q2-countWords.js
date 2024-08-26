// Questão 2: Escreva uma função chamada countWords que recebe uma string como
// argumento e retorna o número de palavras contidas na string. Considere que as palavras
// são separadas por espaços em branco. Por exemplo:
// countWords("A quick brown fox"); // retorna 4


const countWords = (str) => {
    if(str.length === 0){
        return 0;
    }
    //.trim() retira os espaços do começo e no final
    str = str.trim();
    let espacos = 0;
    for(let caractere of str){
        if(caractere === ' '){
            espacos += 1;
        }
    }
    return espacos + 1;
}

const frase = 'ola pessoa bonita';
console.log(countWords(frase));