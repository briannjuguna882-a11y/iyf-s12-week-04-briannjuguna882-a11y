
function removeDuplicates(items) {
    return [...new Set(items)];
}

const numbers = [2, 4, 2, 6, 4, 8, 6, 10];

console.log("Original numbers:", numbers);
console.log("Without duplicates:", removeDuplicates(numbers));
