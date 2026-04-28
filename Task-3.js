//Level 1 – Functions Basics
//Task 1: Student Form Function
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}
studentForm("Naveen", 22, "MERN");
//Name: Naveen
//Age: 22
//Course: MERN


//Task 2: Calculator Function
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}
calc(10, 5);
//Addition: 15
//Subtraction: 5
//Multiplication: 50


//Task 3: Reusable Greeting
function greet(name) {
    console.log("Hello " + name);
}
greet("Kamal");
greet("Praveen");
greet("Sai");
//Hello Kamal
//Hello Praveen
//Hello Sai


// Level 2 – Return & Scope
//Task 4: Return Value
function square(num) {
    return num * num;
}
console.log(square(5));
//25


//Task 5: Scope Check
function testScope() {
    let secret = "javascript";
    console.log("Inside function:", secret);
}
testScope();
//console.log("Outside function:", secret);
// Trying to access outside it comes error 
// i.e ReferenceError: secret is not defined
//Why means?
//1.let has block scope
//2.The variable secret is created inside the function only
//3.Outside the function → it does not exist


//Level 3 – Spread / Rest
//Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];
let toys = [...boys, ...girls];
console.log(toys);
//["car", "bike", "doll", "teddy"]


//Task 7: Unlimited Numbers
function sumAll(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sumAll(10, 20, 30, 40));
//100


// Level 4 – Destructuring
//Task 8: Array Destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1);
console.log(c2);
console.log(c3);
//red
//green
//blue


//Task 9: Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};
let { name, role } = emp;
console.log(name, role);
//Naveen Developer


//Level 5 – Real-Time Logic
//Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}
const offers = offerGenerator();
// Calling next()
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 
//10% cashback
//20% cashback
//50% cashback
//Try again
//undefined 


// Level 6 – Advanced
//Task 11: Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(add(10)(20)(30));
//60


//Task 12: Student Marks Analyzer
function markus(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    let average = total / nums.length;
    console.log("Total =", total);
    console.log("Average =", average);
}
markus(80, 90, 70, 60);
//Total = 300
//Average = 75


//Challenge Task (Real Company Level)
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}
register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");
//Name: Naveen
//Role: Frontend
//Skills: HTML CSS JS React