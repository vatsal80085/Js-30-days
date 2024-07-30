console.table([
  "addition= ",
  2 + 2,
  "subtraction=",
  34 - 21,
  "Multiplication= ",
  1002 * 2,
  "Quotient= ",
  10101 / 3,
  "Remainder= ",
  10220 % 7,
]);
let sum = 19;
let num = 81;
console.log(num, sum);
num += sum;
console.log(num, sum);
num -= sum;
console.log(num, sum);
if (num < sum) {
  console.log("orewa Monkey D Luffy");
} else {
  console.log("kaizokoni naro okutoda");
}

// === is the strict equal operator. It only returns a Boolean True if both the operands are equal and of the same type. If a is 2, and b is 4,

// a === 2 //(True)
// b === 4 //(True)
// a === '2' //(False)

//vs True for all of the following,

// a == 2
// a == "2"
// 2 == '2'
let a = 22;
let boy = 22;
let girl = 22;
if (boy >= 22 && girl >= 22) {
  console.log("you are legally allowed to marry each other");
} else if (boy < 22 || girl < 22) {
  console.log("FBI! open up");
}

//ternary operator --> short hand if else
const age = 26;
const beverage = age >= 21 ? "Saake" : "Juice";
console.log(beverage);

let number = -23;
let answer = number > 0 ? "positive" : "negative";
console.log(answer);

// if(a>=18){
//     console.log("Eligible to drive")
// }
// else {
//     console.log("Hold your horses kid")
// }
