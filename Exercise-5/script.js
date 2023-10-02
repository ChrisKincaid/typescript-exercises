var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(name, age, grade) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.studentName, ", Age: ").concat(this.studentAge, ", Grade: ").concat(this.studentGrade));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function () {
        if (this.studentGrade >= 60) {
            return true;
        }
        else {
            return false;
        }
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var student = new Student('John', 18, 66);
student.displayInfo();
console.log(student.isPassing());
student = new Student('Taquan', 20, 99);
student.displayInfo();
console.log(student.isPassing());
student = new Student('Onin', 35, 59);
student.displayInfo();
console.log(student.isPassing());
