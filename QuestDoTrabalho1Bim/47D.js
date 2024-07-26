function inverterArray(array) {
    // Cria uma cópia do array para evitar modificar o array original
    let arrayInvertido = array.slice();

    // Define dois ponteiros: um no início e um no fim do array
    let inicio = 0;
    let fim = arrayInvertido.length - 1;

    // Troca os elementos até que os ponteiros se cruzem
    while (inicio < fim) {
        // Troca os elementos nos índices `inicio` e `fim`
        let temp = arrayInvertido[inicio];
        arrayInvertido[inicio] = arrayInvertido[fim];
        arrayInvertido[fim] = temp;

        // Move os ponteiros
        inicio++;
        fim--;
    }

    return arrayInvertido;
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
const arrayInvertido = inverterArray(numeros);
console.log(`Array original: ${numeros}`);
console.log(`Array invertido: ${arrayInvertido}`);
