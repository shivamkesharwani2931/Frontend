const createJokes = () => {
    const BASE_URL = 'https://official-joke-api.appspot.com/random_joke';
//fetching api
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((res) => renderUI(res))
        .catch((err) => console.log(err));
};

const renderUI = (value) => {
    console.log('value', value);

    const output = document.getElementsByClassName('output')[0];
    output.innerHTML = '';

    //create elements in JS
    const id = document.createElement('h4');
    const punchline = document.createElement('h2');
    const setup = document.createElement('h3');
    const type = document.createElement('h5');

    id.textContent = value.id;
    punchline.textContent = value.punchline;
    setup.textContent = value.setup;
    type.textContent = value.type;

    punchline.style.color = 'black';
    punchline.style.background = 'yellow';

    output.append(id, punchline, setup, type);
};