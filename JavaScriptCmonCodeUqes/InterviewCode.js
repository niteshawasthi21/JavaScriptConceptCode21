//1. find Largest word in a sentence.
function largestWordInsentance(sentance) {
  let wordsArray = sentence.split(" "); //split the sentence in an array
  let longetsWord = ""; //let a variable for comparing
  for (let word of wordsArray) {
    //itrrate and assign largest word
    if (word.length > longetsWord.length) {
      longetsWord = word;
    }
  }
  return longetsWord;
}

// 2. Check whether a string is a palindrome(A palindrome string is a sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization)
function palindromeSrting(word) {
  const cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, ""); //ignoring spaces, punctuation, and capitalization
  let reversedStr = "";
  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }
  const isPlaindrome = reversedStr === cleanedStr ? true : false;
  return isPlaindrome;
}

//3. Remove duplicate Item form Array.
function removeDuplicates1(arrayData) {
  return [...new Set(arrayData)];
}

function removeDuplicates2(arrayData) {
  return arrayData.filter((item, index) => arrayData.indexOf(item) === index);
}

function removeDuplicates3(arr) {
  return arr.reduce((uniqueItems, item) => {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
    return uniqueItems;
  }, []);
}

function removeDuplicates4(arr) {
  let uniqArr = [];
  for (let item of arr) {
    if (!uniqArr.includes(item)) {
      uniqArr.push(item);
    }
  }
  return uniqArr;
}

//
