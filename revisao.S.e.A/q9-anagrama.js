function areAnagrams(str1, str2) {
  function normalizeString(str) {
    return str.replace(/\s+/g, '').toLowerCase();
  }

  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world")); 
console.log(areAnagrams("Astronomer", "Moon starer")); 
console.log(areAnagrams("The Morse Code", "Here come dots")); 
