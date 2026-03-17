// ================================
// JavaScript Promise Methods
// all, race, any, allSettled
// ================================


// 1. Promise.all()
// ----------------
// Waits for all promises to resolve
// If any one fails → whole promise fails

let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then(res => console.log("Promise.all success:", res)) // [10, 20, 30]
    .catch(err => console.log("Promise.all error:", err));


// Failure case
let p4 = Promise.reject("Error!");

Promise.all([p1, p4, p3])
    .then(res => console.log(res))
    .catch(err => console.log("Promise.all failed:", err));


// ================================


// 2. Promise.race()
// ----------------
// Returns first settled promise (resolve OR reject)

let r1 = new Promise(res => setTimeout(() => res("First"), 1000));
let r2 = new Promise(res => setTimeout(() => res("Second"), 500));

Promise.race([r1, r2])
    .then(res => console.log("Promise.race result:", res)); // "Second"


// Failure case
let r3 = new Promise((res, rej) => setTimeout(() => rej("Fail"), 400));

Promise.race([r3, r1])
    .then(res => console.log(res))
    .catch(err => console.log("Promise.race error:", err));


// ================================


// 3. Promise.any()
// ----------------
// Returns first successful promise
// Ignores failures
// If all fail → AggregateError

let a1 = Promise.reject("Error 1");
let a2 = Promise.resolve("Success!");
let a3 = Promise.reject("Error 2");

Promise.any([a1, a2, a3])
    .then(res => console.log("Promise.any result:", res)); // "Success!"


// All fail case
Promise.any([
    Promise.reject("A"),
    Promise.reject("B")
])
.catch(err => console.log("Promise.any error:", err));


// ================================


// 4. Promise.allSettled()
// ----------------
// Waits for all promises (success + failure)
// Never rejects

let s1 = Promise.resolve(10);
let s2 = Promise.reject("Error!");
let s3 = Promise.resolve(30);

Promise.allSettled([s1, s2, s3])
    .then(res => console.log("Promise.allSettled result:", res));

/*
Output:
[
  { status: "fulfilled", value: 10 },
  { status: "rejected", reason: "Error!" },
  { status: "fulfilled", value: 30 }
]
*/


// ================================


// Summary:
// --------
// Promise.all        → All must succeed
// Promise.race       → First settled (success or fail)
// Promise.any        → First success only
// Promise.allSettled → Get all results (no failure)
