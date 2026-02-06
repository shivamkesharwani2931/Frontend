// Assignment operators
let x = 2;
const y = 3;

// Arithmetic operators
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + "foo" // "5foo"

// String + Boolean -> concatenation
"foo" + false // "foofalse"

// String + String -> concatenation
"foo" + "bar" // "foobar"

let a = 10;
let b = 20;

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;

console.log(sum,
    sub,
    mul,
    div,
    mod)

// Concatenation

console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"


// ?? -> Nullish coalescing
// If null or defined is there then it will return default value 
let value='null';
let value2 = null;
console.log(typeof(value) ?? (value2));

// ternary operator  condition ? exp1:exp2
let ans = 2>3 ? 'i am true' : 'i am false';
console.log(ans);

// Unary operator  (+)
let string = "78"
console.log(string);
console.log(typeof +string);

// Conversion in Js
// String to number
let str = "25";
let num1 = Number(str);
let num2 = parseInt(str);
let num3 = +str;
console.log(num1); // 25
console.log(num2); // 25
console.log(num3); // 25

// number to String
let num = 100;
let num4 = 55
console.log("num4",typeof(num4 + ' '))
let str1 = String(num);
let str2 = num.toString();
console.log(str1); // "100"
console.log(str2); // "100"

// String to boolean
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false
 
// Number to boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// Boolean to number
console.log(Number(true));  // 1
console.log(Number(false)); // 0

//Implicit Conversion
console.log("10" + 5); // "105" (number → string)
console.log("10" - 5); // 5     (string → number)
console.log("10" * 2); // 20

// Spread and rest operator
