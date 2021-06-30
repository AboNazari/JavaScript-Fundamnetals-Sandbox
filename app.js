// Lesson 1
// log to console 
/*
console.log("hello world");
console.log("123445");
console.log([1,2,3,4,5]);
console.table({a:1, b:2});
console.error("This is an error message");
console.warn("This is a warning");
console.time("start");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
console.timeEnd("start");
console.clear();
*/



// Lesson 2
/*
// Simple Math with Numbers
const num1 = 100;
const num2 = 40;
const num3 = -30;
let val;

val = num1 + num2 - num3;
val = num1 / num3 * Math.abs(num3);
val = num1 % 40;
val = num2 - num3;

// The Math Object
val = Math.cbrt(100);
val = Math.sin(3.1427);
val = Math.ceil(3.1);
val = Math.floor(4.2);
val = Math.pow(89, 8);
val = Math.floor(Math.random()*40);
val = Math.random();

console.log(val);
*/




/*
// Lesson 3
// Strings Methodes + Concatenation
const firstName = 'Abdullah';
const LastName = 'Nazari';
const age = 19;
const str = 'Hello there My name is Jack';
const tags = 'Javascript, web designing, Flex box, Hedging'
let val;

val = firstName + LastName;
// Concatenation
val = firstName+ ' '+ LastName;
val = 'hello there my name is '+ firstName + " and I am "+ age;

// Append
val= "brad";
val +=" johnson"

// Escaping
val = 'That\'s awesome man, I love it, it\'s so nice.'

// length
val = firstName.length;

// Concat()
val = firstName.concat(" "+ LastName);

// Change Case
val = firstName.toLocaleUpperCase();
val = firstName.toLocaleLowerCase();
val = firstName[4];

//Indexof()
val = firstName.indexOf("l");
val = firstName.lastIndexOf('l');

// CharAt()
val = firstName.charAt("3");

// Get Last Char
val = firstName.charAt(firstName.length -1);

//Substring() 
val = firstName.substring(0,5);
val = firstName.slice(1,5);

// split()
val = str.split(" ");
val = tags.split(",");

// replace
val = str.replace("Jack", "Brad");

// Includes
val = str.includes('Hello');

console.log(val);
*/




/*
//lesson 4
//Variables var,let,const

var
var name = 'steve';
console.log(name);
name = 'john';
console.log(name);

var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// let
let person;
person = "Abdullah";
console.log(person);

let person = {
  name: 'Abdullah',
  age: 24
}
person.name = 'ali';
person.age= '20';
console.log(person);

const Numbers = [1,2,34,5];
Numbers.push= 7;
console.log(Numbers);
*/




/*
//Lesson 5 
// Types of Variables in JavaScript

// Primitive data type

//String
name = "Ali";
console.log(typeof name);

// number
number = 32;
console.log(typeof number);

// Boolean 
Passed = true;
console.log(typeof Passed);

// Null
car = null;
console.log(typeof car);

// Undefined
let fly;
console.log(typeof fly);

// Symbole 
let sym = Symbol();
console.log(typeof sym);


// Reference Data Types

// Arrays 
const team = ['Ahmad', 'Ali', 'Mehmod'];
console.log(typeof team);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);
*/





/*
// Lesson 6
// Types of Conversion

// To String
val = String(5);
val = String(true);
val = String(false);
val = String(new Date());
val = String([1,2,3,24,23,5,34,0]);
// toString
val = (5).toString();
val = (true).toString();

// To Number
val = Number("Hello");
val = Number("5");
val = Number(true);
val = Number(null);

val = parseInt('456');
val = parseFloat('345.45');

// output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));
*/





/*
// Lesson 7
//Template Literals

const name = 'Abdullah';
const age = 34;
const job = 'Web Developer';
const city = 'Bishkek';
let html;

// Without template strings (ES5)

html = '<ul><li>Name:'+ name + '</li><li>Age:' + age + '</li><li>Job:' + job + '</li><li>City:' + city + '</li></ul>';

html = '<ul>'+
      '<li>Name:' + name + '</li>' +
      '<li>Age:' + age + '</li>' +
      '<li>Job:' + job + '</li>' +
      '<li>City:' + city + '</li>' +
      '</ul>';
// with template strings (ES6)

html = `
<ul>
  <li>Name: ${name} </li>
  <li>Age: ${age} </li>
  <li>Job: ${job} </li>
  <li>City: ${city} </li>
  <li> ${age > 30 ? 'Over 30': 'Under 30'} </li>
  </ul>
`
document.body.innerHTML = html;
*/



/*
// Lesson 8
// Arrays

// Creating some Arrays
const numbers = [1,22,34,2,53,45,3,445,7,566,3,43,6,23,4];
const numbers2 = [123,14,245,3,342,5,23,42];
const Cities = ['Bishkek', 'Kabul', 'Delhi', 'NewYork', 'Moscow', 'Tehran'];
const Random  = ["herat", 23423,234,2, true, {a:1, b:4}, undefined, null, [1,24,23,4]];
 let val;


val = numbers.length;
val = numbers[2];
numbers[2]= 54;
val = Array.isArray(numbers);
val = numbers.indexOf(45);
// val = numbers.charAt('5');

//Mutating Arrays
numbers.push(1000);
numbers.unshift(1000); 
numbers.shift();
numbers.pop();
numbers.splice(1,5);
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// sorting the Arrays
val = Cities.sort();
val = numbers.sort();

// Using the Compare Function 
val = numbers.sort(function (x,y){
  return x-y;
} );

// find
function under20(num){
  return num < 20;
}
val = numbers.find(under20);


console.log(numbers);
console.log(val);
*/





/*
// Lesson 9
// Object Literals 

const person = {
  firstName: 'Abdullah',
  lastName: 'Nazari',
  age: 19,
  email: 'abdullahnazari2001@gmail.com',
  hobbies: ['Watching movie', 'Youtube', 'Social media'],
  address:{
    city: 'Bishkek',
    country: 'Kyrgyzstan'
  },
  getBirthYear: function(){
    return 2021 - this.age;
  }
}
let val;
val = person;

// get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.country;
val = person.getBirthYear();

console.log(val);
*/





/*
// Lesson 10
//Date and Time

let val;
const today = new Date();
let birthday = new Date('12-01-2001 12:00:00');
birthday = new Date('December 10 2001');
birthday = new Date('12/01/2001');

// get
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getUTCMilliseconds();
val = today.getTime();
val= today.getFullYear();
// set
birthday.setFullYear('2020');
birthday.setDate('29');

console.log(birthday);
*/





/*
// Lesson 11
// If statments_comparison operators 

// if (something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// Equal to ==
if (id == 100){
  console.log('correct');
} else {
  console.log('Incorrect');
}

// NOt Equal to !=
if (id != 100){
  console.log('correct');
} else {
  console.log('Incorrect');
}

// Equal to by Type and value ===
if (id === 100){
  console.log('correct');
} else {
  console.log('Incorrect');
}

// Test if Undefined
if (typeof id !== 'undefined'){
  console.log(`The Id is ${id}`);
} else {
  console.log('NO ID');
}

// Greater or Less than 
if (id >= 100){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Else If

const name = 'John';
const age = 24;

if(name === 'John'){
  console.log('Access Granted');
} 
  else if (name === 'Steve') {
  console.log('Access Granted');
} else  {
  console.log('Access Denied');
}

// Logical Operators

const name = 'John';
const age = 17;

// And &&
if (age > 0 && age <= 12){
  console.log(`${name} is a child`);
} else if(age>=13 && age<=18){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// Or ||
if (age < 12 || age > 50){
  console.log(`${name} is a suitable for the game`);
} else {
  console.log(`${name} is allowed to play the game`)
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');
*/




/*
// Lesson 12
// Switches

const color = 'green';

switch(color){
  case 'red':
    console.log('Color is Red');
    break;
  case 'green':
    console.log('Color is Green');
    break;
  default:
    console.log('Color is neither Red nor Green');
    break;
}

// Day Finder

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednsday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}
console.log(`Today is ${day}`);
*/


/*
// Lesson 13
// Function Declarations_Expressions

// function declarations
function Survey(firstName, lastName, Age){
  if(firstName ==='Ali' && lastName ==='Nazari' && Age ===19){
    console.log('Access Granted')
  }
}
console.log(Survey('Ali','Nazari',19));

// function Expressions
function square(x){
  return Math.sqrt(x);
}
console.log(square(4));

// Imediatley Invokable function Expressions - IIFEs
(function(name){
  console.log(`Hello World ${name}..`);
})('John');

// Property Methodes
const todo = {
  add: function(){
    console.log('Breakfast is preiority');
  },
  more: function(){
    console.log('This section is useless');
  }
}

todo.add();
todo.more();
*/



/*
// Lesson 14
// General Loops

// for Loop
for(let i=0; i < 10 ; i++){
 if(i === 3){
   console.log( i+'  is the Best Number ');
   continue;
 }
 if( i === 5){
  console.log('Break Down in '+ i);
  break;
 }
  console.log(i);
}


// While Loop

let i = 0;
while(i < 10){
  console.log(i);
  i++;
}

// Do while loop
let i = 0;
do {console.log('number ' + i);
    i++;  }
while(i<10);

// Loop Through Array 
const cars = ['ford', 'Toyota', 'Honda', 'Benz']
for(let i = 0; i< cars.length; i++){
  console.log(cars[i]);
}

// For Each Loop 
cars.forEach(function(car, index){
  console.log(`${index}: ${car}`);
  // console.log(Array);
});

//Map
const users = [
  {id:1, name:'Nazar'},
  {id:2, name:'Karim'},
  {id:3, name:'Nazir'},
  {id:4, name:'Hussain'}
]

const ids = users.map(function(user){
  return user.id;
});
console.log(ids);

// for in Loop 
const user = {firstName: 'John', lastName: 'Steve', age:32}
for (let x in user){
  console.log(`${x} : ${user[x]}`);
}
*/


/*
// Lesson 15
//  The Window Object

// Window Methods / Objects / Properties

// Alert
alert('Hello World');

// Prompt 
const input = prompt('How are You?');
alert('its great to hear that you are ' + input);

// Confirm 
if(confirm('Are you Sure?')){
  console.log('Yes');
} else {
  console.log('No');
};


let val;

// Outer width and height
val = window.outerHeight;
val = window.outerWidth;

// Inner Widht and Height
val = window.innerHeight;
val = window.innerWidth;

// Scroll point
val = scrollY;
val = scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.protocol;

// History Object
window.history.go(1);
val = window.history.length;

// Navigator Object 
val = window.navigator;
val = window.navigator.language;
val = window.navigator.appVersion;

// Redirect
window.location.href = 'http://google.com';

// Reload
window.location.reload();

console.log(val);
*/



/*
// Lesson 16
// Block Scope With Let_Const

// Global Scope
var a = 1;
let b = 2;
const c = 3;


// Function Scope
function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a,b,c);
}
test();

// var will change its value if used again with same name inside a block scope
// Block Scope
if(true){
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('if Scope: ', a,b,c);
}

for(var a = 0; a<10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a,b,c);
*/
















