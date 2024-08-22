function areAnagrams(str1, str2) {
  // Função auxiliar para normalizar a string: remover espaços e converter para minúsculas
  function normalizeString(str) {
    return str.replace(/\s+/g, '').toLowerCase();
  }

  // Normaliza as duas strings
  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  // Se as strings normalizadas tiverem comprimentos diferentes, não são anagramas
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Ordena os caracteres das duas strings e compara
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Exemplos de uso
console.log(areAnagrams("listen", "silent")); // retorna true
console.log(areAnagrams("hello", "world")); // retorna false
console.log(areAnagrams("Astronomer", "Moon starer")); // retorna true
console.log(areAnagrams("The Morse Code", "Here come dots")); // retorna true
