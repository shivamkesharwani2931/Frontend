let age = 61;

if (age >= 18 && age < 60) {
    console.log("you can eligible to drive...;")
}
else if (age >= 60) {
    console.log("you are old..")
}
else {
    console.log("you are not eligible to drive...");
}


//Questions
//1. Even / odd
let num = 0
if (num % 2 == 0) {
    console.log("Even number")
} else {
    console.log("odd number")
}

// 2. positive , negative, or zero
if (num > 0) {
    console.log("Positive")
} else if (num < 0) {
    console.log("Negative")
} else {
    console.log("zero")
}

// 3. greater between two numbers
let num1 = 10;
let num2 = 50;
if (num1 > num2) {
    console.log("num1 is greater", num1)
} else {
    console.log("num2 is greater", num2);
}


// 4. greater between three numbers
let num3 = 10;
if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greater");
} else {
    console.log("num3 is greater")
}

// 5. check leap year or not

// 6. students score is given - print grades based on percentages
let score = 85;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B");
}
else if (score >= 70 && score < 80) {
    console.log("Grade: C");
}
else if (score >= 60 && score < 70) {
    console.log("Grade: D");
}
else if (score >= 0 && score < 60) {
    console.log("Grade: F");
}
else {
    console.log("Invalid score");
}
