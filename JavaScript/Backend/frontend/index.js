const BASE_URL = 'http://localhost:8080/todo'

//  function fetchData{
//     let res = await fetch(BASE_URL);
//     let data = await res.json();
//     return data;
// };

const addTodo=()=>{
    // create
    console.log(fetchData());
    const text = document.querySelector('#value').value;
    const todo = {
        text:text,
        isEdit:false,
        isCompleted:false,
    };

    fetch(BASE_URL,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(todo)
    });
};