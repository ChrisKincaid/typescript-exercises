// Declaring a tuple type
let person: [string, number] = ["John", 30];

// Accessing elements of the tuple
console.log(person[0]); // Output: "John"
console.log(person[1]); // Output: 30

// Modifying elements of the tuple
person[0] = "Jane";
person[1] = 25;

// Tuple with different data types
let student: [string, number, boolean] = ["Alice", 22, true];

// Using destructuring with tuples
let [nameFirst, age, isStudent] = student;
console.log(nameFirst);      // Output: "Alice"
console.log(age);       // Output: 22
console.log(isStudent); // Output: true
