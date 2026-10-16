
function isPalindrome(text) {
    const cleanedText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return cleanedText === cleanedText.split("").reverse().join("");
}

console.log("level:", isPalindrome("level"));
console.log("Brian:", isPalindrome("Brian"));
console.log("Race car:", isPalindrome("Race car"));
console.log("Madam:", isPalindrome("Madam"));
