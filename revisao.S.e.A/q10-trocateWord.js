function reverseWords(str) {
    const wordsArray = str.split(' ');
  
    const reversedWordsArray = wordsArray.reverse();
  
    const reversedStr = reversedWordsArray.join(' ');
  
    return reversedStr;
  }
  
  console.log(reverseWords("The quick brown fox")); 
  console.log(reverseWords("Hello World")); 
  console.log(reverseWords("JavaScript is awesome"));
  