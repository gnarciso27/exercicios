function replaceWord(originalString, wordToReplace, replacementWord) {
    const parts = originalString.split(wordToReplace);
    return parts.join(replacementWord);
}

console.log(replaceWord("The quick brown fox jumps over the lazy dog", "fox", "cat")); 
console.log(replaceWord("Hello world! World is beautiful.", "world", "Earth")); 

