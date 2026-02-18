
//Findout charter occurence, most occured character?
const strValue = "Hello Nitesh! 👨‍💻🚀 Welcome to 2026 -- Let's build AI-powered apps @SpotDrop #Angular17 #Firebase🔥🔥 100% Ready??? AaAaBbBbCc12345!!!";
/**
* Get character frequency and most occurred character(s)
* @param {string} input - Input string
* @param {boolean} ignoreSpaces - Remove spaces (default: true)
* @param {boolean} ignoreCase - Convert to lowercase (default: false)
* @returns {object} {
*   frequency: {},
*   maxCount: number,
*   mostFrequent: []
* }
*/

function getCharacterStats(input, ignoreSpaces = true, ignoreCase = false) {

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    let processedString = input;  // Step 1: Normalize string

    if (ignoreCase) {
        processedString = processedString.toLowerCase();
    }

    if (ignoreSpaces) {
        processedString = processedString.split(' ').join("");
    }

    // Step 2: Calculate frequency
    const frequency = {};

    for (const char of processedString) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Edge case: empty string
    if (Object.keys(frequency).length === 0) {
        return {
            frequency: {},
            maxCount: 0,
            mostFrequent: []
        };
    }

    const maxCount = Math.max(...Object.values(frequency)); // Step 3: Find max occurrence

    const mostFrequent = Object.keys(frequency)
        .filter(key => frequency[key] === maxCount); // Step 4: Find most frequent characters

    return {
        frequency,
        maxCount,
        mostFrequent
    };
}
console.log(getCharacterStats(strValue, true, true));





//Raw code for character occurrence and most occurred character.
function characterOccurrence(str) {
    const charCount = {};

    if ( str.includes(" ")) {
        str = str.split(' ').join("");
    }

    for (let char of str) { 
         charCount[char] = (charCount[char] || 0) + 1;
     }

     const maxCount = Math.max(...Object.values(charCount));
     const mostFrequentChars = Object.keys(charCount).filter(key => charCount[key] === maxCount);


     return {
        charCount,
        maxCount,
        mostFrequentChars
     };
}

console.log(characterOccurrence(strValue));