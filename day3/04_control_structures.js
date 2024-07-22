//switch case in js

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1
let number = 63;
let message;

switch (true) {
    case (number < 33):
        message = "Fail";
        break;
    case (number >= 33 && number < 50):
        message = "Not exactly failed but really bro";
        break;
    case (number > 50 && number < 75):
        message = "still can't go home, can you?";
        break;
    case (number > 75 && number < 90):
        message = "Average";
        break;
    case (number > 90):
        message = "tum bhi yhi ho hum bhi yahi hain";
        break;
    default:
        message = "Invalid number.";
}
console.log(message);
