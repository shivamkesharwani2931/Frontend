let count = 0;
const countVariable = document.getElementById('count');
const decrement = document.getElementById('dec');
const reset = document.getElementById('res');
const increment = document.getElementById('inc');
dec.disabled=true

const incrementFunc = () => {
    count++;
    countVariable.innerHTML='';
    countVariable.innerHTML=`Counter:${count}`;
    // countVariable.append(`Counter:${count}`);
      if(count>0){
        dec.disabled=false
    }
    console.log(count)
}
const decrementFunc = () => {
    count--;
    countVariable.innerHTML='';
    countVariable.innerHTML=`Counter:${count}`;
    // countVariable.append(`Counter:${count}`);
    if(count<=0){
        dec.disabled=true
    }
    console.log(count)
}

const resetFunc = () => {
    count = 0;
    countVariable.innerHTML='';
    countVariable.append(`Counter:${count}`);
    if(count<=0){
        dec.disabled=true
    }
}