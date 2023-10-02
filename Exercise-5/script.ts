class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;
    
    // Define the constructor here
    constructor(name: string, age: number, grade: number) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }

    // Define the displayInfo method here
    displayInfo() {
        console.log(`Name: ${this.studentName}, Age: ${this.studentAge}, Grade: ${this.studentGrade}`);
    }

    // Define the isPassing method here
    isPassing() {
        if (this.studentGrade >= 60) {
            return true;
        } else {
            return false;
        }
    }
}

// Instantiate a new student object and call the methods to test your class
let student = new Student('John', 18, 66);
student.displayInfo();
console.log(student.isPassing());
student = new Student('Taquan', 20, 99);
student.displayInfo();
console.log(student.isPassing());
student = new Student('Onin', 35, 59);
student.displayInfo();
console.log(student.isPassing());
