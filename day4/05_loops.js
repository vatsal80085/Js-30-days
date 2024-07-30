"use strict"; //treat all Js code as Newer version

// //Activity1 For loops
// for (let index = 1; index <= 10; index++) {
//     console.log(index)
// }

// for(let i = 1; i<=10; i++){
//     console.log("\n", 5*i)
// }

// //Activity2 While loops
// let i = 1;
// let sum = 0;
// while (i<=10) {
//     sum = sum+i;
//     i= i+1;
// }
// console.log(sum)

// let iterative = 10;
// while(iterative >= 1){
//     console.log(iterative);
//     iterative = iterative-1;
// }

//Activity3 Do while loops
// let law = 1;
// do {
//   console.log(law);
//   law = law + 1;
// } while (law <= 5);

// //Factorial program
// let robin = 5;
// let factorial = 1;
// do {
//   factorial = robin * factorial;
//   robin = robin - 1;
// } while (robin != 0);
// console.log(factorial);

// //Activity4
// function generatePattern(numRows) {
//     for (let i = 1; i <= numRows; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             if (j === 1) {
//                 row += '\x1b[31m*\x1b[0m '; // Red star
//             } else {
//                 row += '* ';
//             }
//         }
//         console.log(row);
//     }
// }
// const numRows = 5; // Adjust the number of rows as needed
// generatePattern(numRows);

//activity5
for (let index = 1; index <= 10; index++) {
  if (index == 5) continue;
  console.log(index);
}

for (let index = 1; index <= 10; index++) {
    if (index == 7) break;
    console.log(index);
  }