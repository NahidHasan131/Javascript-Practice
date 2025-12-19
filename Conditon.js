let age = 16;

//Simple Ternery Operator
age >= 18 ? console.log("Eligible to vote") : console.log("Not eligible to vote");


let price = 1200;
const isLeader = true;

/*if (isLeader) {
    price = 0;
}else {
    price = price + 100;
}
console.log(price);*/
// price = isLeader ? 0 : price + 100;
//price = isLeader === true ? 0 : price + 100;
//console.log(`The final price is: ${price}`);



prices = 1100;
//Complex Ternery Operator
let discount = prices > 1000 ? (prices * 0.1) : (prices * 0.05);
console.log(`The discount is: ${discount}`);




// if(isLeader){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 100;
// }
// console.log(`The final price is: ${price}`);

//Nested Ternery Operator
price = isLeader ? (price > 1000 ? price / 2 : 0) : price + 100;
console.log(`The final price is: ${price}`);




