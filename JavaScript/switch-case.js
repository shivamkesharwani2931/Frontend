// const value = true;
// switch (null) {
//     case true:
//         console.log("yes");
//         break;
//     case false:
//         console.log("no");
//     default:
//         console.log("Please select boolean value i.e true/false")

// }


let operator = process.argv[4]
let a = process.argv[2]
let b = process.argv[3]

switch(operator){
    case "+":
        return a+b;

    case "-":
        return a-b;

    case "*":
        return a*b;
    
    case "/":
        return a/b;

    default:
        console.log("select proper operator")
}

