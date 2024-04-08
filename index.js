function isPalindrome(word) {
  // Write your algorithm here
  //First i will start by converting all the words to lowercase 
  const lowerWord = word.toLowerCase();

  //I will then initialize two pointers,one at the start to represent the first character of the word and the other one at the end of the word to represent the index of the last character of the word.
  let start = 0;
  let end = lowerWord.length -1;

  //Iterate through every word while the start pointer is less than the end pointer
  while(start < end) {

    //Check if each character at the pointers are not equal,return false
    if (lowerWord[start] !== lowerWord[end]) {
      return false

    }
    //I will then move the pointers towards each other to the middle of the word by incrementing the start and decrementing the end
    start++;
    end--;

  }

  //Check if the loop will complete without returning a false,that word is a palindrome
  return true;

 }

 /* 
  Add your pseudocode here
  1)Start by converting all the input words to lowercase
  2)Next,initialize two pointers, one at the start of the word and the other at the end of the word
  3)Iterate through every word while the start pointer is less than the end pointer
  4)Check if each character at the pointers are not equal,return false
  5)Move the pointers closer to each other towards the middle of the word
  6)If the loop completes without returning false, return true since the word is a palindrome
 */

/*
  Add written explanation of your solution here
  -Converting all the input words to lowercase helps in handling cases where different letter cases have been used
  -Initialize two pointers, one at the start of the word to represent the first character of the word and the other one at the end of the word to represent the index of the last character of the word.
  -Iterate through each word using a while loop,this compares characters at corresponding positions to check if the word is a palindrome
  -If the characters at the pointers are not equal,we return false since the word cannot be a palindrome
  -Move the pointers closer to each other,the start pointer moves towards the end while the end pointer moves towards the start,this allows us to compare each character from both ends towards the middle of the word
  -If the loop completes without returning false,that means the word reads the same forwards and backwards,this means the word is a palindrome and we return true.
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("welcome"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));

}

module.exports = isPalindrome;
