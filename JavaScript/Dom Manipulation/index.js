function getData(){
    // here it will return HTMLCollection or NodeList which is similar like array
    let value = document.getElementsByTagName("h1");
    console.log("value: ",value);
     
    for (let i=0; i <value.length;i++){
        console.log(`value[${i}].innertext, ${value[i].innertext}`);
    }

    // here we are converting the collection into array structure 
    console.log()
    let valueOfArray = Array.from(document.getElementsByTagName("h1"));
    // -------------------or-----------------------
    //  let valueOfArray =[...document.getElementsByTagName("h1")];
    console.log(valueOfArray);
    valueOfArray.map(el=> console.log(el.innerText));
}

// getData()

const handleAdd =()=>{
    const text = document.getElementById('textVal').value;
    const output = document.getElementsByClassName('output')[0];
    output.innerHTML='';
    const p= document.createElement('p');
    p.innerText=text;
    output.append(p);
}

// how access the node of document's

let value = document.getElementsByClassName('mainText');
console.log('🚀 ~ value:', value);
let value1 = document.getElementById('mainText1').innerText;
// console.log('🚀 ~ value1:', value1);

// for (let i = 0; i < value.length; i++) {
//   const element = value[i];
//   console.log('🚀 ~ element:', element.innerHTML);
// }

// for (let key in value) {
//   if (value[key].innerHTML === undefined) continue;
//   console.log('🚀 ~ key:', value[key].innerHTML);
// }
// value = [...value];
// console.log('🚀 ~ valueW:', Array.isArray(value));

// value = Array.from(value);

// console.log('🚀 ~ value:', Array.isArray(value));

// value &&
//   value.map((element) => {
//     if (element.innerHTML === undefined) return;
//     console.log('🚀 ~ element:', element.innerHTML);
//   });