
function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return numbers.reduce((largest, number) =>
        number > largest ? number : largest
    );
}

const scores = [45, 82, 67, 91, 58];

console.log("Numbers:", scores);
console.log("Largest number:", findLargest(scores));
