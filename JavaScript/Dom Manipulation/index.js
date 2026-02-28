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