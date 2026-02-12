//Print numbers from 1 to 10 using a loop
console.log("1. Print numbers from 1 to 10");
for (i = 1; i < 11; i++) {
    console.log(i);
}
console.log(`\n`)

//Print all even numbers between 1 and 50
console.log("2. Even numbers between 1 and 50 ");
for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log(`\n`)

//Print all odd numbers between 1 and 50
console.log("3. Odd numbers between 1 and 50 ");
for (i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log(`\n`)

//Print the multiplication table of 5
console.log("4. Table of 5");
for (i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}
console.log(`\n`)

//Print numbers from 100 to 1 in reverse order
console.log("5. Print numbers from 100 to 1");
for (i = 100; i > 0; i--) {
    console.log(i);
}
console.log(`\n`)

//Print sum of numbers from 1 to 100 
console.log("6. Print sum of numbers from 1 to 100");
sum = 0;
for (i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log(sum);
console.log(`\n`)

//Print square of the first 10 natural numbers
console.log("7. Square of the first 10 natural numbers");
for (i = 1; i <= 10; i++) {
    console.log(i * i)
    // console.log(i**2)
}
console.log(`\n`)

//Print cube of the first 10 natural numbers
console.log("8. Cube of the first 10 natural numbers");
for (i = 1; i <= 10; i++) {
    console.log(i * i * i)
    // console.log(i**3)
}
console.log(`\n`)

//Print the first 10 multiples of 3
console.log("9. Print the first 10 multiples of 3")
let count = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && count < 10) {
        count += 1;
        console.log(i);
    }
} console.log(`\n`)

//Print the factorial of a given number
console.log("10. Print the factorial of a given number")
let num = +process.argv[2];   // change this number
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + " is " + factorial);
console.log(`\n`);


//while loop
let j=1;
while(j<=10){
    console.log(j);
    j++;
}

//do-while loop
let x=0;
do{
    console.log("this is do-while loop");
    x++;
}while(x<10);