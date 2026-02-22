// filter() creates a new array with only elements that pass a condition.
// array.filter(function(element, index, array) {
//     return trueOrFalse;
// });


// 1. Keep only even numbers.
let nums4 = [1, 2, 3, 4, 5];
let evens = nums4.filter(num => num % 2 === 0);
console.log(evens);


// 2. Keep numbers greater than 50.
let nums5 = [10, 60, 30, 80];
let greater50 = nums5.filter(num => num > 50);
console.log(greater50);


// 3. Keep strings longer than 5 characters.
let words2 = ["apple", "banana", "kiwi"];
let longWords = words2.filter(word => word.length > 5);
console.log(longWords);


// 4. Keep names starting with vowel.
let names2 = ["Amit", "Rahul", "Isha", "Karan"];
let vowelNames = names2.filter(name =>
  "aeiouAEIOU".includes(name[0])
);
console.log(vowelNames);


// 5. Keep positive numbers.
let nums6 = [-3, 5, -1, 8];
let positive = nums6.filter(num => num > 0);
console.log(positive);


// 6. Keep valid emails (contain @).
let emails = ["test@gmail.com", "invalid.com"];
let validEmails = emails.filter(email => email.includes("@"));
console.log(validEmails);


// 7. Keep palindromes.
// let words3 = ["madam", "hello", "racecar"];
// let palindromes = words3.filter(word =>
//   word === word.split("").reverse().join("")
// );
// console.log(palindromes);


// 8. Keep students who passed (marks >= 40).
let students = [
  { name: "Amit", marks: 35 },
  { name: "Rahul", marks: 60 }
];
let passed = students.filter(student => student.marks >= 40);
console.log(passed);


// 9. Keep only unique values.
// let nums7 = [1, 2, 2, 3, 4, 4];
// let unique = nums7.filter((num, index, arr) =>
//   arr.indexOf(num) === index
// );
// console.log(unique);


// 10. Keep completed tasks.
// let tasks = [
//   { task: "Study", completed: true },
//   { task: "Play", completed: false }
// ];
// let completedTasks = tasks.filter(task => task.completed);
// console.log(completedTasks);


// MAP + FILTER
// 1. Keep odd numbers, then return cubes.
let nums8 = [1, 2, 3, 4, 5];
let oddCubes = nums8
  .filter(num => num % 2 !== 0)
  .map(num => num ** 3);
console.log(oddCubes);


// 2. Keep words longer than 3, then uppercase.
let words4 = ["hi", "hello", "js", "world"];
let result2 = words4
  .filter(word => word.length > 3)
  .map(word => word.toUpperCase());
console.log(result2);


// 3. Keep prices above 100, then apply 18% tax.
let prices2 = [50, 120, 200];
let taxed = prices2
  .filter(price => price > 100)
  .map(price => price * 1.18);
console.log(taxed);


// 4. Keep names starting with A, then return first letters.
let names3 = ["Amit", "Rahul", "Ankit", "Vikas"];
let result4 = names3
  .filter(name => name.startsWith("A"))
  .map(name => name[0]);
console.log(result4);


// 5. Keep negative numbers, then return absolute values.
let nums9 = [-5, 3, -2, 8];
let negativeAbs = nums9
  .filter(num => num < 0)
  .map(num => Math.abs(num));
console.log(negativeAbs);