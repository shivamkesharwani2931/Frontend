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


// 7. Categorize person by age:
let newAge =10;
if (newAge >= 0 && newAge <= 12) {
    console.log("Child");
}
else if (newAge >= 13 && newAge <= 19) {
    console.log("Teen");
}
else if (newAge >= 20 && newAge <= 59) {
    console.log("Adult");
}
else if (newAge >= 60) {
    console.log("Senior");
}
else {
    console.log("Invalid age");
}

//8. Check if a given character is a vowel or consonant.
let char = 'o';
if (char.length === 1) {
    if (
        char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
    ) {
        console.log("Vowel");
    }
    else if (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z')
    ) {
        console.log("Consonant");
    }
    else {
        console.log("Invalid input");
    }
} else {
    console.log("Invalid input");
}

//9. Check if a number is divisible by both 3 and 5
let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("Number is divisible by both 3 and 5");
} else {
    console.log("Number is NOT divisible by both 3 and 5");
}

// 10. A temperature is given. Print Cold, Pleasant, Hot.

