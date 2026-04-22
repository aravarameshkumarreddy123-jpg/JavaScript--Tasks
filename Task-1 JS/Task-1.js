//Task1
//Section-1 Variable Update
var a=50;
a=100;
console.log(a);
//100

//Section-2 Let Variable Math
let marks=80;
marks=marks+10;
console.log(marks);
//90

//Section-3 Const Value
const price=500;
const finalPrice = price + 100;
console.log(finalPrice);
//600

//Section-4 Printing Statements
console.log("Welcome Team");
console.log(2026);
console.log(true);
//Welcome Team
//2026
//true

//Section-5 Datatype Check
console.log(typeof("Welcome Team"));
console.log(typeof(2026));
console.log(typeof(true));
//string
//number
//boolean

//Section-6 Array Task
let fruits=["Apple","Banana","Orange","watermelon","Pineapple"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
//['Apple', 'Banana', 'Orange', 'Watermelon', 'Pineapple']
//Apple
//Pineapple

//Section-7 Object Task
let student={
    name:"Naveen",
    age:20,
    course:"MERN"
}
console.log(student.name);
console.log(student.age);
//Naveen
//20

//Section-8 Arithmetic Operators
console.log(20+10);
console.log(50-25);
console.log(5*5);
console.log(100/4);
console.log(20%3);
//30
//25
//25
//25
//2

//Section-9 Increment/Decrement
let x = 5;
x++;
console.log(x);

let y =10;
y--;
console.log(y);
//6
//9

//Section-10 Comparision Operators
console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);
//true
//false
//true
//false
//true

//Section-11 Logical Operators
console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));
//true
//true
//false

//Section-12 Ternary Operator
let age = 18;
age >= 18 ? console.log("Eligible") : console.log("Not Eligible");
//Eligible