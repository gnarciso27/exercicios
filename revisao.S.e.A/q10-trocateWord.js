function reverseWords(str) {
    // Divide a string em palavras usando espaço como delimitador
    const wordsArray = str.split(' ');
  
    // Inverte a ordem das palavras no array
    const reversedWordsArray = wordsArray.reverse();
  
    // Junta as palavras de volta em uma string com espaços entre elas
    const reversedStr = reversedWordsArray.join(' ');
  
    return reversedStr;
  }
  
  // Exemplos de uso
  console.log(reverseWords("The quick brown fox")); // retorna "fox brown quick The"
  console.log(reverseWords("Hello World")); // retorna "World Hello"
  console.log(reverseWords("JavaScript is awesome")); // retorna "awesome is JavaScript"
  