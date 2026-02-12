const value = true;
switch (null) {
    case true:
        console.log("yes");
        break;
    case false:
        console.log("no");
    default:
        console.log("Please select boolean value i.e true/false")
}


let a = +process.argv[2];
let b = +process.argv[3];
let operator = process.argv[4];

switch(operator){
    case "+":
        console.log(a+b);
        break

    case "-":
        console.log(a-b);
        break

    case "*":
        console.log(a*b);
        break
    
    case "/":
        console.log(a/b);
        break

    default:
        console.log("select correct operator")
}

