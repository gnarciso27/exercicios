function compressString(str) {
    // Se a string estiver vazia, retornamos ela mesma
    if (str.length === 0) {
      return str;
    }
  
    // Inicializa variáveis para a compressão
    let compressed = '';
    let count = 1;
  
    // Itera sobre a string, começando do segundo caractere
    for (let i = 1; i < str.length; i++) {
      // Se o caractere atual é igual ao anterior, incrementa o contador
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        // Se a sequência mudou, adiciona o caractere e o contador à string comprimida
        compressed += str[i - 1] + count;
        // Reinicia o contador para o novo caractere
        count = 1;
      }
    }
  
    // Adiciona o último grupo de caracteres à string comprimida
    compressed += str[str.length - 1] + count;
  
    // Retorna a string comprimida se for menor que a original, caso contrário, retorna a original
    return compressed.length < str.length ? compressed : str;
  }
  
  // Exemplos de uso
  console.log(compressString("aaabbcccc")); // retorna "a3b2c4"
  console.log(compressString("abc")); // retorna "abc"
  console.log(compressString("aabbcc")); // retorna "aabbcc" (não comprimido, pois o tamanho não diminui)
  