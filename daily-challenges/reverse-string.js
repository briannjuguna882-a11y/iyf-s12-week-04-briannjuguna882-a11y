
function reverseString(text) {
    return text.split("").reverse().join("");
}

const message = "Brian Njuguna";

console.log("Original:", message);
console.log("Reversed:", reverseString(message));
