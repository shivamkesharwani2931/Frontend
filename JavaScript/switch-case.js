const value = true;
switch (null) {
  case true:
    console.log("yes");
    break;
  case false:
    console.log("no");
  default:
    console.log("Please select boolean value i.e true/false");
}

// let a = +process.argv[2];
// let b = +process.argv[3];
// let operator = process.argv[4];

// switch(operator){
//     case "+":
//         console.log(a+b);
//         break

//     case "-":
//         console.log(a-b);
//         break

//     case "*":
//         console.log(a*b);
//         break

//     case "/":
//         console.log(a/b);
//         break

//     default:
//         console.log("select correct operator")
// }

// SWITCH-CASE QUESTIONS BASIC:

// 1. Take a number (1–7). Print the day of the week.
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 2. Take a month number (1–12). Print the month name.
let month = 5;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
}

// 3. Input a number (1–4). Print: 1 → Addition, 2 → Subtraction, 3 → Multiplication, 4 → Division
let op = 2;

switch (op) {
  case 1:
    console.log("Addition");
    break;
  case 2:
    console.log("Subtraction");
    break;
  case 3:
    console.log("Multiplication");
    break;
  case 4:
    console.log("Division");
    break;
  default:
    console.log("Invalid choice");
}

// 4. A user selects a drink: C → Coffee, T → Tea, J → Juice, W → Water
let drink = "T";

switch (drink) {
  case "C":
    console.log("Coffee");
    break;
  case "T":
    console.log("Tea");
    break;
  case "J":
    console.log("Juice");
    break;
  case "W":
    console.log("Water");
    break;
  default:
    console.log("Invalid drink");
}

// 5. Input a grade ('A', 'B', 'C', 'D', 'F'). Print a message like Excellent, Good, etc.
let grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Average");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}

// 6. Input the first letter of a traffic light ('R', 'Y', 'G'). Print Stop, Ready, or Go.
let signal = "R";

switch (signal) {
  case "R":
    console.log("Stop");
    break;
  case "Y":
    console.log("Ready");
    break;
  case "G":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

// 7. Input a browser name (Chrome, Firefox, Edge, Safari). Show a launch message.
let browser = "Chrome";

switch (browser) {
  case "Chrome":
    console.log("Launching Chrome...");
    break;
  case "Firefox":
    console.log("Launching Firefox...");
    break;
  case "Edge":
    console.log("Launching Edge...");
    break;
  case "Safari":
    console.log("Launching Safari...");
    break;
  default:
    console.log("Browser not supported");
}

// 8. Input a number (1–3). Print: 1 → Circle Area, 2 → Square Area, 3 → Triangle Area
let shape = 1;

switch (shape) {
  case 1:
    console.log("Circle Area");
    break;
  case 2:
    console.log("Square Area");
    break;
  case 3:
    console.log("Triangle Area");
    break;
  default:
    console.log("Invalid choice");
}

// 9. Input a language code ('en', 'fr', 'es', 'de'). Display the language name.
let lang = "fr";

switch (lang) {
  case "en":
    console.log("English");
    break;
  case "fr":
    console.log("French");
    break;
  case "es":
    console.log("Spanish");
    break;
  case "de":
    console.log("German");
    break;
  default:
    console.log("Invalid language code");
}

// Advanced Switch-Case Practice

// 1. Write a program using switch-case to build a calculator
// that supports addition, subtraction, multiplication, division, modulus, and exponentiation.

let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;
  case "^":
    console.log(a ** b);
    break;
  default:
    console.log("Invalid operator");
}

// 2. Using switch-case, display the name of the month
// and number of days (consider leap year for February).

let month1 = 2;
let year = 2024;

switch (month1) {
  case 1:
    console.log("January - 31 days");
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      console.log("February - 29 days (Leap Year)");
    else console.log("February - 28 days");
    break;
  case 3:
    console.log("March - 31 days");
    break;
  case 4:
    console.log("April - 30 days");
    break;
  case 5:
    console.log("May - 31 days");
    break;
  case 6:
    console.log("June - 30 days");
    break;
  case 7:
    console.log("July - 31 days");
    break;
  case 8:
    console.log("August - 31 days");
    break;
  case 9:
    console.log("September - 30 days");
    break;
  case 10:
    console.log("October - 31 days");
    break;
  case 11:
    console.log("November - 30 days");
    break;
  case 12:
    console.log("December - 31 days");
    break;
  default:
    console.log("Invalid month");
}

// 3. ATM Menu (Check Balance, Deposit, Withdraw, Exit)

let choice = 2;
let balance = 1000;
let amount = 200;

switch (choice) {
  case 1:
    console.log("Balance:", balance);
    break;
  case 2:
    balance += amount;
    console.log("Deposited. New Balance:", balance);
    break;
  case 3:
    balance -= amount;
    console.log("Withdrawn. New Balance:", balance);
    break;
  case 4:
    console.log("Exit");
    break;
  default:
    console.log("Invalid option");
}

// 4. Convert grade character into description

let grade1 = "B";

switch (grade1) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}

// 5. Nested switch to display vehicle details

let type = "2-wheeler";
let model = "Bike";

switch (type) {
  case "2-wheeler":
    switch (model) {
      case "Scooter":
        console.log("2-Wheeler: Scooter");
        break;
      case "Bike":
        console.log("2-Wheeler: Bike");
        break;
      default:
        console.log("Unknown model");
    }
    break;

  case "4-wheeler":
    switch (model) {
      case "Car":
        console.log("4-Wheeler: Car");
        break;
      case "SUV":
        console.log("4-Wheeler: SUV");
        break;
      default:
        console.log("Unknown model");
    }
    break;

  default:
    console.log("Invalid vehicle type");
}

// 6. Food ordering system

let food = "Pizza";

switch (food) {
  case "Pizza":
    console.log("Price: 300 | Delivery: 30 mins");
    break;
  case "Burger":
    console.log("Price: 150 | Delivery: 20 mins");
    break;
  case "Pasta":
    console.log("Price: 250 | Delivery: 25 mins");
    break;
  case "Coffee":
    console.log("Price: 100 | Delivery: 10 mins");
    break;
  default:
    console.log("Item not available");
}

// 7. Check working day or weekend (1-7)

let day1 = 6;

switch (day1) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working Day");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// 8. Display season using fall-through

let monthNumber = 4;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}

// 9. Country to Currency

let country = "India";

switch (country) {
  case "India":
    console.log("Rupee");
    break;
  case "USA":
    console.log("Dollar");
    break;
  case "UK":
    console.log("Pound");
    break;
  case "Japan":
    console.log("Yen");
    break;
  default:
    console.log("Currency not found");
}

// 10. Grading system based on percentage range

let percentage = 85;

switch (true) {
  case percentage >= 90:
    console.log("Grade A");
    break;
  case percentage >= 80:
    console.log("Grade B");
    break;
  case percentage >= 70:
    console.log("Grade C");
    break;
  case percentage >= 60:
    console.log("Grade D");
    break;
  default:
    console.log("Fail");
}
