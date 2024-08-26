// Questão 3: Crie uma função chamada isPalindrome que verifica se uma string é um
// palíndromo (uma palavra ou frase que é a mesma ao contrário, ignorando espaços,
// pontuação e diferença entre maiúsculas e minúsculas). Por exemplo:
// isPalindrome("A man a plan a canal Panama"); // retorna true
// isPalindrome("Hello"); // retorna false

const isPalindrome = (str) => {
    frase = str.toLowerCase().replaceAll(' ', '')
    if (frase === frase.split('').reverse().join('')){
        return 'esta frase é um palindromo';
    }else{
        return 'esta frase não é um palindromo';
    }
}

console.log(isPalindrome('oi'))