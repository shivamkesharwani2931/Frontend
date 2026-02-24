let iceCream = new Promise((res,rej) => {
    let value = true;

   if(value){
        res('got it...')
    }else{
        rej('call mummy...')
    }
});


// Synchronous behaviour
iceCream.then((res)=>{
    console.log('res:',res)
}).catch((err)=>{
    console.log('err:',err)})
    .finally(()=>console.log("finally executed..."));

// Asynchronous Behaviour

//setInterval - clearInterval
console.log('A');
const timeOut=()=>{
    console.log('B');
    let id = setTimeout(()=>{
        console.log('this is setTimeout');
        clearTimeout(id)
    },3000);
    console.log('C');
};
console.log('D');
timeOut();
console.log('E');

//setTimeout - clearTimeout
console.log('A');
const timeOut_1=()=>{
    console.log('B');
    let id_1 = setInterval(()=>{
        console.log('this is setInterval');
        clearInterval(id_1)
    },3000);
    console.log('C');
};
console.log('D');
timeOut_1();
console.log('E');