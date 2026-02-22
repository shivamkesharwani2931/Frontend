// map() creates a new array by transforming each element of the original array.
// array.map(function(element, index, array) {
//     return newValue;
// });


// 1. Given a list of integers, produce a new list where each number is squared.
let nums1 = [1, 2, 3, 4];
let squared = nums1.map(num => num * num);
console.log(squared);


// 2. Given a list of names, return a list of their lengths.
let names1 = ["Shivam", "Amit", "Rahul"];
let nameLengths = names1.map(name => name.length);
console.log(nameLengths);


// 3. Convert a list of temperatures in Celsius to Fahrenheit.
let tempsC = [0, 25, 30];
let tempsF = tempsC.map(c => (c * 9/5) + 32);
console.log(tempsF);


// 4. Given a list of words, return a list where each word is capitalized.
let words1 = ["hello", "world"];
let capitalized = words1.map(word => word.toUpperCase());
console.log(capitalized);


// 5. Given a list of prices, return a list with a 10% discount applied.
let prices1 = [100, 200, 300];
let discounted = prices1.map(price => price * 0.9);
console.log(discounted);


// 6. Given a list of sentences, return number of words in each sentence.
let sentences = ["I love JS", "Map and Filter are powerful"];
let wordCounts = sentences.map(sentence => sentence.split(" ").length);
console.log(wordCounts);


// 7. Given a list of numbers, return even or odd for each.
let nums2 = [1, 2, 3, 4];
let evenOdd = nums2.map(num => num % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd);


// 8. Given full names, return initials.
let fullNames = ["John Doe", "Jane Smith"];
let initials = fullNames.map(name => 
  name.split(" ").map(n => n[0]).join("")
);
console.log(initials);


// 9. Given list of dates, return years.
let dates = ["2024-01-10", "2025-05-22"];
let years = dates.map(date => date.split("-")[0]);
console.log(years);


// 10. Return absolute values.
let nums3 = [-5, 3, -2];
let absolute = nums3.map(num => Math.abs(num));
console.log(absolute);


// MAP + FILTER Questions
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