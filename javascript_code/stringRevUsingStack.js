/**
 * Reverses a string using Stack data structure (LIFO principle).
 * 
 * @param {string} str - Input string to reverse
 * @returns {string} Reversed string. Returns empty string for invalid/empty input.
 * 
 * @example
 * getReverse("folow"); 
 * // Returns: "wolof"
 * 
 * @example
 * getReverse("Hi Nitesh"); 
 * // Returns: "shtehiN iH"
 * 
 * @example
 * getReverse(""); 
 * // Returns: ""
 * 
 * @example
 * getReverse(null); 
 * // Returns: ""
 * 
 * @example
 * getReverse("a"); 
 * // Returns: "a" (unchanged)
 */

function getReverse(str) {
    // Edge Case 1: Handle non-string or empty input
    if (typeof str !== 'string' || str.trim() === '') {
        return '';
    }

    // Edge Case 2: Single character or already empty
    if (str.length <= 1) {
        return str;
    }

    let stack = [];

    // Push all characters to stack (LIFO structure)
    for (let char of str) {
        stack.push(char);
    }

    // Pop characters in reverse order (array for performance)
    const reversedStr = [];
    while (stack.length > 0) {
        reversedStr.push(stack.pop());
    }

    return reversedStr.join('');
}

console.log(getReverse("Hi Nitesh")); // Output: "shtehiN iH"
console.log(getReverse("folow"));