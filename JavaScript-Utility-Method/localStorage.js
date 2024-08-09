// Simple way to manage data in the browser's localStorage.

// 1. Set Data in Local Storage
function setLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true; // Data successfully stored
    } catch (error) {
        console.error(`Error setting data in localStorage for key "${key}":`, error);
        return false; // Error occurred while storing data
    }
}

// 2. Get Data from Local Storage
function getLocalStorage(key) {
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error(`Error retrieving data from localStorage for key "${key}":`, error);
        return null; // Error occurred while retrieving data
    }
}

// 3. Remove Data from Local Storage
function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true; // Data successfully removed
    } catch (error) {
        console.error(`Error removing data from localStorage for key "${key}":`, error);
        return false; // Error occurred while removing data
    }
}

// 4. Clear All Data in Local Storage
function clearLocalStorage() {
    try {
        localStorage.clear();
        return true; // localStorage cleared successfully
    } catch (error) {
        console.error("Error clearing localStorage:", error);
        return false; // Error occurred while clearing localStorage
    }
}