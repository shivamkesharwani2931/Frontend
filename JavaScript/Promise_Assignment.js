let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(Math.floor(Math.random() * 10));
    }, 1000);
});

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(Math.floor(Math.random() * 10));
    }, 1000);
});

//Asynchronous version
async function getdata(){
    let res =await Promise.all([promise,promise2]);
    console.log(res)
   let result= res.reduce((acc,curr)=>{
        return acc+curr
    },0)
    console.log(result)
}
getdata()

//Synchronous version
// function getdata() {
//     Promise.all([promise, promise2])
//         .then((result) => {
//             console.log(result); // actual values
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// }
// getdata();