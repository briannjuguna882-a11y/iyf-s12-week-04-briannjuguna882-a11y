
const gradeTracker = {
    students: [],

    addStudent(name, scores) {
        const student = { name, scores };
        this.students.push(student);
        return student;
    },

    getStudent(name) {
        return this.students.find(student => student.name === name);
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const scores = Object.values(student.scores);

        if (scores.length === 0) {
            return 0;
        }

        const total = scores.reduce((sum, score) => sum + score, 0);
        return Number((total / scores.length).toFixed(2));
    },

    getLetterGrade(average) {
        if (average >= 80) return "A";
        if (average >= 70) return "B";
        if (average >= 60) return "C";
        if (average >= 50) return "D";
        return "F";
    },

    getSubjectAverage(subject) {
        const scores = this.students
            .filter(student => student.scores[subject] !== undefined)
            .map(student => student.scores[subject]);

        if (scores.length === 0) {
            return "No scores found for this subject";
        }

        const total = scores.reduce((sum, score) => sum + score, 0);
        return Number((total / scores.length).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((top, student) =>
            this.getStudentAverage(student.name) >
            this.getStudentAverage(top.name) ? student : top
        );
    },

    getStrugglingStudents() {
        return this.students.filter(
            student => this.getStudentAverage(student.name) < 50
        );
    },

    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const average = this.getStudentAverage(name);

        return {
            name: student.name,
            scores: student.scores,
            average,
            letterGrade: this.getLetterGrade(average)
        };
    }
};

// Sample students
gradeTracker.addStudent("Alice", {
    Mathematics: 90,
    English: 92,
    Science: 93
});

gradeTracker.addStudent("Brian", {
    Mathematics: 75,
    English: 76,
    Science: 76
});

gradeTracker.addStudent("Charlie", {
    Mathematics: 40,
    English: 45,
    Science: 35
});

// Tests
console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));
console.log("Brian's average:", gradeTracker.getStudentAverage("Brian"));
console.log("Top student:", gradeTracker.getTopStudent().name);
console.log(
    "Struggling students:",
    gradeTracker.getStrugglingStudents().map(student => student.name)
);
