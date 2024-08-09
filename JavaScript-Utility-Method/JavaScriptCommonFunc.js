// JavaScript Common Utility Methods

// 1. Convert any text into capitalized mode
const capitalizeText = (text) => {
    return text.toLowerCase()
        .replace(/(^|\s)\w/g, c => c.toUpperCase());
};
console.log(capitalizeText('learn to rest, not to quit'));
// Output: Learn To Rest, Not To Quit


// 2. Validate Full Name
const validateFullName = (value) => {
    if (!value) return "This field must not be empty.";
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(value)) {
        return "Invalid full name";
    }
    return "Valid full name";
};

console.log(validateFullName('Brendan Eich'));
console.log(validateFullName('James Bond 007'));
/**
 * Output: 
 * Valid full name
 * Invalid full name
 */


// 3. Validate Email
const validateEmail = (value) => {
    if (!value) return "This field must not be empty.";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        return "Invalid email";
    }
    return "Valid email";
};

console.log(validateEmail("tonyawasthi@"));
console.log(validateEmail("tonyawasthi@gmail.com"));
/**
 * Output: 
 * Invalid email
 * Valid email
 */


// 4. Validate Password
const validatePassword = (password) => {
    if (!password) return "This field must not be empty.";
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!regex.test(password)) {
        return "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.";
    }
    return "Valid password";
};

console.log(validatePassword("Nitesh@123"));
/**
 * Output: Valid password
 */


// 5. Validate Mobile Number
const validateMobileNumber = (value) => {
    if (!value) return "This field must not be empty."; 
    const regex = /^\d{10}$/;
    if (!regex.test(value)) {
        return "Invalid mobile number";
    } 
    return "Valid mobile number";
};

console.log(validateMobileNumber("1234567893"));
/**
 * Output: Valid mobile number
 */


/**
 * 6. Truncate Text Function
 * The truncate description function allows you to shorten a long paragraph 
 * while preserving its main idea. This is useful for displaying brief overviews 
 * on product pages or blog sites.
 */
const getTruncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    }
    const truncated = description.substring(0, maxLength - 3);
    return truncated + '...';
};

let truncateDescription = getTruncateDescription(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, 
    ultricies sed, dolor. Cras elementum ultrices diam. 
    Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, 
    orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`, 
    100
);
console.log(truncateDescription);


/**
 * 7. Slugify Function
 * Creating user-friendly URLs, often referred to as slugifying, involves transforming 
 * a string into a format that is simple, clear, and easy to read. This is commonly used 
 * in blog post titles, resulting in URLs like “7-essential-JavaScript-utilities-that-work-for-your-web-projects”.
 */
function slugify(text) {
    return text
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing spaces
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, ''); // Remove hyphens from the start and end
}

// Example usage
let slug = slugify("7 Essential JavaScript Utilities That Work for Your Web Projects");
console.log(slug);


/**
 * 8. Sanitize Function
 * The sanitize function is designed to protect your web applications from XSS 
 * (Cross-Site Scripting) attacks by encoding potentially harmful characters in user input. 
 * This ensures that any HTML or script tags are rendered harmless when displayed on a webpage.
 */
const sanitize = (input) => {
    const encodedCharacters = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
    };

    return input.replace(/[&<>"'/]/g, match => encodedCharacters[match]);
};

const userInput = '<script>alert("Hello, world!")</script>';
const sanitizedUserInput = sanitize(userInput);
console.log(sanitizedUserInput);
/**
 * Output: &lt;script&gt;alert(&quot;Hello, world!&quot;)&lt;&#x2F;script&gt;
 */

// User Greetings Method
function personalizeUserGreeting() {
    const currentHour = new Date().getHours(); // Get the current hour
    let greeting;
    if (currentHour < 12) {
        greeting = "Good morning! ☀️"; // Morning greeting
    } else if (currentHour < 18) {
        greeting = "Good afternoon! 🌞"; // Afternoon greeting
    } else {
        greeting = "Good evening! 🌜"; // Evening greeting
    }
    return greeting; // Return the personalized greeting
}

// Example usage
const userGreeting = personalizeUserGreeting();
console.log(userGreeting);