let a = +process.argv[2];
console.log(a)
let b = +process.argv[3];
console.log(b)

function addition(a,b){
    return a+b
}
function subtraction(a,b){
    return a-b
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    return a/b
}

console.log(addition(a,b))
console.log(subtraction(a,b))
console.log(multiplication(a,b))
console.log(division(a,b))




