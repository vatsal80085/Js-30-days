// return type functions
function even_odd(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}
function square(num) {
  return num * num;
}

// non return type function results undefined if printed
function greater_than(a, b) {
  if (a < b) {
    console.log("b is greater than a");
  } else if (a > b) {
    console.log("a is greater than b");
  } else {
    console.log("both are equal");
  }
}

//string concatenation is similar to python
function concat(x, y) {
  console.log(x + y);
}

greater_than(14, 56); //function calling
concat("vatsal", "agarwal");
console.log(even_odd(10));
console.log(square(10));
console.log(even_odd(10001));
console.log(square(10001));
