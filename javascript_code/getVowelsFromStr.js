/**
 * Extracts all vowels from a given string and returns both the vowel array and count.
 * 
 * @param {string} str - Input string to analyze for vowels
 * @returns {Object} Object containing:
 *                   - {number} vowelsCount - Total number of vowels found
 *                   - {string[]} vowels - Array of all vowels extracted (in order)
 * 
 * @example
 * const result = getVowelsFromStr("Hi, Nitesh I am Angular Dev");
 * console.log(result);
 * // Output: { vowelsCount: 12, vowels: ['i','i','e','I','a','A','u','a','e'] }
 * 
 * @example
 * getVowelsFromStr(""); 
 * // { vowelsCount: 0, vowels: [] }
 * 
 * @example
 * getVowelsFromStr(null); 
 * // { vowelsCount: 0, vowels: [] }
 * 
 * @throws {none} - Gracefully handles all edge cases without throwing errors
 */


function getVowelsFromStr(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let strVowels = [];

    if (typeof str !== 'string' || str.trim() === '') {
        return { vowelsCount: 0, vowels: [] };
    }

    for (let char of str) {
        if (vowels.includes(char)) {
            strVowels.push(char);
        }
    }

    return {
        vowelsCount: strVowels.length,
        vowels: strVowels
    };
}

const str = "Hi, Nitesh I am Angular Dev";
const result = getVowelsFromStr(str);
console.log(result);
// { vowelsCount: 12, vowels: ['i','i','e','I','a','A','u','a','e'] }
