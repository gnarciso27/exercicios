function vogal(n){
    const vogais = "aeiouAEIOU";
    let contagem = 0;
    for(char of n){
        if (vogais.includes(char)){
            contagem++;
        }
    }
    return contagem;
}
const texto = "ola pessoal bonito do meu coracao";
console.log(vogal(texto));