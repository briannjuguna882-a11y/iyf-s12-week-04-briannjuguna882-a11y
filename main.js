
/*
  Week 4 - JavaScript Fundamentals
  Lessons 7 and 8, mini-projects, and daily challenges
*/

// ====================================
// TASK 7.1: SETUP AND VARIABLES
// ====================================
console.log("===== TASK 7.1: VARIABLES =====");

let name = "Brian Njuguna";
let age = 25;
const birthYear = 2001;

console.log("My name is:", name);
console.log("My age is:", age);
console.log("My birth year is:", birthYear);
console.log("Name data type:", typeof name);
console.log("Age data type:", typeof age);
console.log("Student status data type:", typeof true);

let score = 100;
score = 150;
console.log("My score is:", score);

const PI = 3.14159;
console.log("Value of PI:", PI);

let isStudent = true;
let favoriteColors = ["blue", "black", "white"];
let today = new Date();

console.log("Am I a student?", isStudent);
console.log("My favorite colors:", favoriteColors);
console.log("Today's date:", today);

// ====================================
// TASK 7.2: DATA TYPES AND OPERATORS
// ====================================
console.log("\n===== TASK 7.2: NUMBER OPERATIONS =====");

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

let count = 0;
count++;
console.log("After increment:", count);
count--;
console.log("After decrement:", count);

console.log("\n===== STRING OPERATIONS =====");

let firstName = "Brian";
let lastName = "Njuguna";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;

console.log("Full name:", fullName);
console.log("Greeting:", greeting);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First name length:", firstName.length);
console.log("First character:", firstName.charAt(0));
console.log("Includes Brian:", fullName.includes("Brian"));

console.log("\n===== COMPARISON OPERATORS =====");

console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);
console.log("10 >= 10:", 10 >= 10);
console.log("4 <= 2:", 4 <= 2);

console.log("\n===== LOGICAL OPERATORS =====");

console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);

let hasID = true;
let isAdult = age >= 18;
console.log("Has ID and is an adult:", hasID && isAdult);

console.log("\n===== AGE CALCULATION =====");

let sampleAge = 25;
let sampleBirthYear = 2001;

console.log("Approximate age in days:", sampleAge * 365);
console.log("Approximate age in hours:", sampleAge * 365 * 24);
console.log("Year turning 100:", sampleBirthYear + 100);

// ====================================
// TASK 7.3: FUNCTIONS
// ====================================
console.log("\n===== TASK 7.3: FUNCTIONS =====");

function calculateArea(length, width) {
    return length * width;
}

console.log("Area:", calculateArea(5, 3));

const celsiusToFahrenheit = function (celsius) {
    return (celsius * 9 / 5) + 32;
};

console.log("25 Celsius in Fahrenheit:", celsiusToFahrenheit(25));

const isEven = (number) => number % 2 === 0;

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
}

console.log("Initials:", getInitials("Brian Njuguna"));

function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("Reversed word:", reverseString("JavaScript"));

function calculateTip(bill, tipPercentage = 10) {
    return bill * tipPercentage / 100;
}

console.log("10% tip on 1000:", calculateTip(1000));
console.log("15% tip on 1000:", calculateTip(1000, 15));

// ====================================
// TASK 7.4: CONTROL FLOW
// ====================================
console.log("\n===== TASK 7.4: CONTROL FLOW =====");

function getGrade(mark) {
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    if (mark >= 50) return "D";
    return "F";
}

console.log("Grade for 85:", getGrade(85));
console.log("Grade for 42:", getGrade(42));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day number";
    }
}

console.log("Day 3:", getDayName(3));
console.log("Day 8:", getDayName(8));

console.log("Numbers 1 to 10:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even numbers from 1 to 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("While loop: numbers 1 to 5:");

let whileCount = 1;

while (whileCount <= 5) {
    console.log(whileCount);
    whileCount++;
}

console.log("Favorite colors:");

for (const color of favoriteColors) {
    console.log(color);
}

console.log("FizzBuzz from 1 to 100:");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("Star triangle:");

for (let row = 1; row <= 5; row++) {
    console.log("*".repeat(row));
}

// ====================================
// MINI-PROJECT: INTERACTIVE CALCULATOR
// ====================================
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Error: Cannot divide by zero.";
            }
            return num1 / num2;

        case "%":
            if (num2 === 0) {
                return "Error: Cannot calculate remainder with zero.";
            }
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Error: Invalid operator.";
    }
}

async function runCalculator() {
    const rl = readline.createInterface({ input, output });

    try {
        console.log("\n===== INTERACTIVE CALCULATOR =====");
        console.log("Supported operators: +, -, *, /, %, **");

        const firstInput = await rl.question("Enter the first number: ");
        const operator = await rl.question("Enter an operator: ");
        const secondInput = await rl.question("Enter the second number: ");

        const num1 = Number(firstInput);
        const num2 = Number(secondInput);

        if (
            firstInput.trim() === "" ||
            secondInput.trim() === "" ||
            !Number.isFinite(num1) ||
            !Number.isFinite(num2)
        ) {
            console.log("Error: Please enter valid numbers.");
            return;
        }

        console.log("Result:", calculate(num1, operator.trim(), num2));
    } finally {
        rl.close();
    }
}

// ====================================
// TASK 8.1: ARRAYS
// ====================================
console.log("\n===== TASK 8.1: ARRAYS =====");

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("All fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

fruits.push("Pineapple");
console.log("After adding a fruit:", fruits);

fruits.pop();
console.log("After removing the last fruit:", fruits);

fruits.forEach(fruit => {
    console.log("Fruit:", fruit);
});

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubledNumbers);

const sampleNumbers = [5, -2, 8, -1, 10];
const positiveOnly = sampleNumbers.filter(number => number > 0);
console.log("Positive numbers:", positiveOnly);

const foundNumber = numbers.find(number => number > 3);
console.log("First number greater than 3:", foundNumber);

const total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Sum of numbers:", total);

console.log("Includes 3:", numbers.includes(3));

// ====================================
// TASK 8.2: OBJECTS
// ====================================
console.log("\n===== TASK 8.2: OBJECTS =====");

const person = {
    name: "Brian Njuguna",
    age: 25,
    occupation: "Trader",

    introduce: function () {
        return `My name is ${this.name}, and I am a ${this.occupation}.`;
    }
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);

person.city = "Nairobi";
person.age = 26;

console.log("City:", person.city);
console.log("Updated age:", person.age);
console.log(person.introduce());

console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));

// ====================================
// TASK 8.3: ARRAYS OF OBJECTS
// ====================================
console.log("\n===== TASK 8.3: ARRAYS OF OBJECTS =====");

const students = [
    { name: "Alice", age: 20, score: 85 },
    { name: "Bob", age: 22, score: 65 },
    { name: "Carol", age: 19, score: 92 },
    { name: "David", age: 21, score: 45 }
];

students.forEach(student => {
    console.log(`${student.name}: ${student.score}`);
});

const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

const passedStudents = students.filter(student => student.score >= 50);
console.log("Students who passed:", passedStudents);

const foundStudent = students.find(student => student.name === "Bob");
console.log("Found student:", foundStudent);

const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;

console.log("Average score:", averageScore);

const hasFailingStudent = students.some(student => student.score < 50);
console.log("Has a student below 50:", hasFailingStudent);

// ====================================
// MINI-PROJECT: STUDENT GRADE TRACKER
// ====================================
console.log("\n===== STUDENT GRADE TRACKER =====");

const gradeTracker = {
    students: [],

    addStudent: function (name, scores) {
        const student = {
            name: name,
            scores: scores
        };

        this.students.push(student);
        return student;
    },

    getStudent: function (name) {
        return this.students.find(student => student.name === name);
    },

    getStudentAverage: function (name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const scores = Object.values(student.scores);

        if (scores.length === 0) {
            return 0;
        }

        const total = scores.reduce((sum, score) => sum + score, 0);
        return total / scores.length;
    },

    getLetterGrade: function (average) {
        if (average >= 80) return "A";
        if (average >= 70) return "B";
        if (average >= 60) return "C";
        if (average >= 50) return "D";
        return "F";
    },

    getSubjectAverage: function (subject) {
        const scores = this.students
            .filter(student => student.scores[subject] !== undefined)
            .map(student => student.scores[subject]);

        if (scores.length === 0) {
            return "No scores found for this subject";
        }

        const total = scores.reduce((sum, score) => sum + score, 0);
        return total / scores.length;
    },

    getTopStudent: function () {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name) ? student : top;
        });
    },

    getStrugglingStudents: function () {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 50
        );
    },

    generateReportCard: function (name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const average = this.getStudentAverage(name);

        return {
            name: student.name,
            scores: student.scores,
            average: average,
            letterGrade: this.getLetterGrade(average)
        };
    }
};

// Add sample students
gradeTracker.addStudent("Alice", {
    Mathematics: 85,
    English: 78,
    Science: 92
});

gradeTracker.addStudent("Bob", {
    Mathematics: 55,
    English: 65,
    Science: 60
});

gradeTracker.addStudent("David", {
    Mathematics: 35,
    English: 40,
    Science: 45
});

// Test the grade tracker
console.log("Alice's record:", gradeTracker.getStudent("Alice"));
console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));

console.log(
    "Alice's letter grade:",
    gradeTracker.getLetterGrade(gradeTracker.getStudentAverage("Alice"))
);

console.log("Bob's average:", gradeTracker.getStudentAverage("Bob"));
console.log("Mathematics average:", gradeTracker.getSubjectAverage("Mathematics"));
console.log("Top student:", gradeTracker.getTopStudent());
console.log("Struggling students:", gradeTracker.getStrugglingStudents());
console.log("Alice's report card:", gradeTracker.generateReportCard("Alice"));

// ====================================
// DAILY CHALLENGE 1: FIZZBUZZ
// ====================================
console.log("\n===== DAILY CHALLENGE 1: FIZZBUZZ =====");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ====================================
// DAILY CHALLENGE 2: REVERSE A STRING
// ====================================
console.log("\n===== DAILY CHALLENGE 2: REVERSE A STRING =====");
console.log('Reverse of "JavaScript":', reverseString("JavaScript"));

// ====================================
// DAILY CHALLENGE 3: LARGEST NUMBER
// ====================================
console.log("\n===== DAILY CHALLENGE 3: LARGEST NUMBER =====");

const challengeNumbers = [12, 45, 7, 89, 23];
let largestWithLoop = challengeNumbers[0];

for (const number of challengeNumbers) {
    if (number > largestWithLoop) {
        largestWithLoop = number;
    }
}

const largestWithReduce = challengeNumbers.reduce((largest, number) =>
    number > largest ? number : largest
);

console.log("Numbers:", challengeNumbers);
console.log("Largest using a loop:", largestWithLoop);
console.log("Largest using reduce:", largestWithReduce);

// ====================================
// DAILY CHALLENGE 4: REMOVE DUPLICATES
// ====================================
console.log("\n===== DAILY CHALLENGE 4: REMOVE DUPLICATES =====");

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueWithSet = [...new Set(duplicateNumbers)];

const uniqueWithFilter = duplicateNumbers.filter(
    (number, index, array) => array.indexOf(number) === index
);

console.log("Original array:", duplicateNumbers);
console.log("Unique using Set:", uniqueWithSet);
console.log("Unique using filter:", uniqueWithFilter);

// ====================================
// DAILY CHALLENGE 5: PALINDROME CHECKER
// ====================================
console.log("\n===== DAILY CHALLENGE 5: PALINDROME CHECKER =====");

function isPalindrome(value) {
    const cleanedValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleanedValue === cleanedValue.split("").reverse().join("");
}

console.log('"Race car" is a palindrome:', isPalindrome("Race car"));
console.log('"JavaScript" is a palindrome:', isPalindrome("JavaScript"));

// ====================================
// RUN THE CALCULATOR ONCE AT THE END
// ====================================
runCalculator();
