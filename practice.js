// Shadowing
// let x = 10;

// const Shadowing = () => {
//     let x = 20; // This x shadows the outer x
//     console.log(x); // Outputs: 20
// }
// Shadowing(); 

// console.log(x); // Outputs: 10


// Hoisting
// console.log(y); // Outputs: undefined
// var y = 5;  

// function hoistingExample() {
//     console.log(z); // Outputs: undefined
//     var z = 15;
// }   
// hoistingExample();
// console.log(z); // ReferenceError: z is not defined


//functional scope
// function test() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // ✅ 10
// }
// test();



// //lexical scope - nesting structure of functions
// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a); // Outputs: 10
//     }
//     inner();
// }
// outer();


// //scope chain - access variables from own scope and parent scopes
// function first() {
//     let a = 10;
//     function second() {
//         let b = 20;
//         function third() {
//             let c = 30;
//             console.log(a + b + c); // Outputs: 60
//         }
//         third();
//     }
//     second();
// }
// first();



// //Callback function
// function greet(name, callback) {
//     callback(name);
// }
// greet("Nahid", function(name){console.log("Hello " + name);});



//Closure
// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = outer();
// counter();
// counter();


// //REST parameter
// function sum(...num){
//     const [a, b, c] = num;
//     return a + b + c;
// }
// console.log(sum(1,2,3)); // Outputs: 6



// //Recursion
// function  factorial(n){
//     if (n === 0) return 1;
    
//     return n* factorial(n-1);
// }

// const fact = factorial(5);
// console.log(fact); // Outputs: 120



// //Anonymous function
// const add = function(a, b){
//     return a + b;
// }
// console.log(add(3, 4)); // Outputs: 7



//map method
// const arr = [1, 2, 3, 4, 5];
// const mul = arr.map(mul => mul * 2);
// console.log(mul); // Outputs: [2, 4, 6, 8, 10]


//filter method
// const arr = [1, 2, 3, 4, 5];
// const even = arr.filter(num => num % 2 === 0);
// console.log(even); // Outputs: [2, 4]


//forEach method
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(num => console.log(num * 2));



//spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [0, ...arr1, ...arr2, 7];
// console.log(combined); // Outputs: [0, 1, 2, 3, 4, 5, 6, 7]


// //Object destructuring
// const person = {name: "Nahid", age: 25, city: "Rajshahi"};
// const {name, age, city} = person;
// console.log(name); // Outputs: Nahid
// console.log(age);


// //array destructuring
// const numbers = [1, 2, 3];
// const[num1, num2, num3] = numbers;
// console.log(num1); // Outputs: 1
// console.log(num2); // Outputs: 2



//Json
// const obj = {
//     name: "Nahid",
//     age: 25,
//     city: "Rajshahi"
// };
// const jsonString = JSON.stringify(obj);
// console.log(jsonString); 

// const parsedObj = JSON.parse(jsonString);
// console.log(parsedObj);

//api fetch
// const fetchData = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await res.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log('Error:', error);
//     }
// }
// fetchData();

// const fetchData = fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(data => console.log(data))



//Asynchronous programming
// console.log("Start");
// setTimeout(()=>{console.log("Middle")}, 2000);
// console.log("End");


// //Promise
// const myPromise = new Promise((resolve, reject)=>{
//     const success = true;
//     if(success){
//         resolve("Promise resolved successfully!");
//     }
//     else{
//         reject("Promise rejected!");
//     }

// });
// myPromise.then(res => console.log(res));



//set Timeout
// setTimeout( () =>{
//     console.log("This message is shown after 3 seconds");
// }, 3000)


//set Interval
// setInterval( () =>{
//     console.log("This message is shown every 2 seconds");
// }, 2000)


//clear Interval
const intervalId = setInterval(()=>{
    console.log("This message is shown every 2 seconds");
},2000);

clearInterval(intervalId);

















