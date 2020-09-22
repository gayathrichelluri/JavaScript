console.log('Hello akka');
//how to write a comment inline

//variables
var temp = "thickshake";
console.log(temp);

var num = 22;
//console.log(num);

document.getElementById("text").innerHTML = "hello there!!!";

//var age = prompt("what is your age");

//document.getElementById("text").innerHTML = age;

//Numbers in javascript
var num = 10;
//increment by 1
num++
//decrement by 1
num--
console.log(num);

//divide /, mutiply *, remainder %
console.log(num % 5);
console.log(num % 6);
console.log(num * 5);
console.log(num / 2);

//Increment or decrement by any number
num += 20;
console.log(num);
num-= 10;
console.log(num);

//Functions in Javascript
//1. create a function
function fun() {
    console.log("this is a function");
}
//2. call a function
fun();

function getName() {
    //var name = prompt("what is your name");
    //console.log("hello" + " " + name);
}

getName();

//How do arguments work in functions
//how do we add two numbers together in a function
var a = "HELLO ", b = "GAYATHRI";
console.log(sum(a,b));
function sum(a, b) {
    return (a+b);
}

//While loops
var num = 0;
while(num<10) {
    num++;
    console.log(num);
}

//For loops
for(let i=11; i<20; i++)
    console.log(i);

//dataypes in javascript
var age = 23; //number
let name = 'gayathri'; //string
let fullname = {first: 'gayathri', last: 'chelluri'}; //object //dict in python
let truth = false; //boolean
let fruits = ['apple', 'banana', 'oranges']; //array //list in python
let random; //undefined
let nothing = null; //value null

//Strings in Javascript (common methods)
let fruit = "mango";
let shake = "mango\nshake"; //new line
console.log(shake);

console.log(fruit.length);
console.log(fruit.indexOf('an'))
console.log(fruit.slice(2,4));
console.log(fruit.replace('an', 123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[3]);
console.log(fruit.split(''));   //split by a character
console.log(fruit.split(',')); //split by a comma

//Arrays in Javascript
let books = ["kiterunner", "unhappy", "peace"];
books = new Array("kiterunner", "you can win", "i have never been [un]happier", "peace");

console.log(books[0]);

books[3] = "updated book";

for(let i=0; i<books.length; i++)
    console.log(books[i]);

//common methods in array
console.log('to string method', books.toString());
console.log(books.join(' * '));
console.log(books.pop(), books); //pops the last item in the list
console.log(books.push('pushing a book'), books); //appends a new item in the list
books[books.length] = 'appending the book'
console.log(books);
books.shift(); //removes the first element of the list
console.log(books);
books.unshift('kiterunner'); //adds an element to the first of the list
console.log(books);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
console.log(fruits.concat(vegetables));

console.log(books.sort());
console.log(books.reverse());

let numbers = [1, 4, 7, 9, 8, 3];
console.log(numbers.sort(function(a,b) {return a-b})); //ascending order
console.log(numbers.sort(function(a,b) {return b-a})); //descending order

let emptyArray = new Array();
for(let i=0; i<10; i++)
    emptyArray.push(i);

console.log('emptyArray', emptyArray);

let student = {
    name: 'Gayathri',
    age: 23,
    height: 150,
    studentInfo: function() {
        return this.name + '\n' + this.age +  '\n' + this.height;
    }
}

console.log(student.name);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


//Conditional, control flows (if else)

//prompt does not work with let
age = 2; //prompt('what is your age?');

if( age>=18 && age<=35) {
    status = "yup";
}
else if( age >35 && age<40)
    status = "nopeyup";
else {
    status = "nope";
}
console.log(status);

//switch statements
//differentiate between weekday vs weekend
// friday saturday sunday -> weekend
// monday to thursday -> weekdays
let week = 0;
let text;
switch(week) {
    case 0:
        text = "weekend";
        break;
    case 5: 
        text = "weekend";
        break;
    case 6: 
        text = "weekend";
        break;
    default:
        text = "weekday";
}
console.log(text);


