function concatenateArrays(array1, array2) {
    const result = [];

    // Junta os elementos que estão na mesma posição
    for (let i = 0; i < array1.length && i < array2.length; i++) {
        result.push(array1[i] + array2[i]);
    }

    // Adiciona os elementos restantes do array1, se houver
    for (let i = array2.length; i < array1.length; i++) {
        result.push(array1[i]);
    }

    // Adiciona os elementos restantes do array2, se houver
    for (let i = array1.length; i < array2.length; i++) {
        result.push(array2[i]);
    }

    return result; // Retorna o array final
}
