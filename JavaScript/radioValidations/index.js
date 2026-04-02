// const radioValue = document.querySelector("[name='content']");
// console.log(radioValue)

// const val = document.getElementsByTagName("input");
// console.log(val)

// let inputs = document.getElementsByName("content");
// console.log(inputs[0].value);

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello');
    const radioVal = document.myRadio.content;

    for(let i=0; i<radioVal.length; i++){
        if(radioVal[i].checked == true){
            document.querySelector('#output').innerHTML =`You are ${radioVal[i].value}`;
            return true;
        }
    }
    document.querySelector('#output').innerHTML=`Please select your gender!!!`;
    return false;
};