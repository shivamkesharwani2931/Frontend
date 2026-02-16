// 1. push()
// Adds element(s) to the end of an array.
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]


// 2. pop()
// Removes the last element from an array.
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2]


// 3. shift()
// Removes the first element from an array.
let arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // [2, 3]


// 4. unshift()
// Adds element(s) to the beginning of an array.
let arr4 = [2, 3];
arr4.unshift(1);
console.log(arr4); // [1, 2, 3]


// 5. map()
// Creates a new array by applying a function to each element.
let arr5 = [1, 2, 3];
let result5 = arr5.map(num => num * 2);
console.log(result5); // [2, 4, 6]


// 6. filter()
// Returns a new array with elements that match a condition.
let arr6 = [1, 2, 3, 4];
let even = arr6.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


// 7. reduce()
// Reduces array to a single value.
let arr7 = [1, 2, 3, 4];
let sum = arr7.reduce((total, num) => total + num, 0);
console.log(sum); // 10


// 8. forEach()
// Executes a function for each array element.
let arr8 = [1, 2, 3];
arr8.forEach(num => console.log(num));


// 9. find()
// Returns the first element that matches a condition.
let arr9 = [10, 20, 30];
let result9 = arr9.find(num => num > 15);
console.log(result9); // 20


// 10. includes()
// Checks if an array contains a value.
let arr10 = [1, 2, 3];
console.log(arr10.includes(2)); // true


// 11. indexOf()
// Returns index of a value.
let arr11 = [10, 20, 30];
console.log(arr11.indexOf(20)); // 1


// 12. slice()
// Returns a shallow copy of part of an array.
let arr12 = [1, 2, 3, 4];
console.log(arr12.slice(1, 3)); // [2, 3]


// 13. splice()
// Adds/removes elements from array (modifies original array).
let arr13 = [1, 2, 3];
arr13.splice(1, 1);
console.log(arr13); // [1, 3]


// 14. concat()
// Merges arrays.
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]


// let arr = [];
// for(i=1;i<=500;i++){
//     arr.push(i);
// }
// console.log(arr);

// let even_num=arr.filter((el)=>{
// return el>=50 && el<=250  && el%2==0

// })
// console.log(even_num)