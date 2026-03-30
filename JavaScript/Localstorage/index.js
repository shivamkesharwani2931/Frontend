let database =JSON.parse(localStorage.getItem(localStorage.key(0))) || []
const addTodo = ()=>{
    let value = document.querySelector('#taskVal').value;
    if(value.trim()==='')return;
    const todo = {
        id:Date.now(),
        text:value,
        isEdits:false,
        isComplete:false,
    };
    database.push(todo);
    localStorage.setItem('todo',JSON.stringify(database));
    console.log('database:',database);
};

//read
