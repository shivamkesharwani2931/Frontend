const API = `http://omdbapi.com/?t=superman&apikey=3d15e923`;

const apiCall = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => appendData(res))
    .catch((err) => console.error(err))
    .finally(() => console.log('done'));
};

apiCall(API);

const appendData = (data) => {
  console.log('🚀 ~ data:', data);
  const mainDiv = document.querySelector('#dataAppend');
  let card = document.createElement('div');

  card.style = `display:flex;
  flex-direction:column`;

  card.innerHTML = `
    <h1>title: ${data.Title}</h1>
    <img src=${data.Poster} alt=${data.Title} />
    <h3><b><mark>${data.BoxOffice}</mark></b></h3>
     `;

  mainDiv.append(card);
};

// how access the node of document's

let value = document.getElementsByClassName('mainText');
console.log('🚀 ~ value:', value);
let value1 = document.getElementById('mainText1').innerText;
// console.log('🚀 ~ value1:', value1);

for (let i = 0; i < value.length; i++) {
  const element = value[i];
  console.log('🚀 ~ element:', element.innerHTML);
}

for (let key in value) {
  if (value[key].innerHTML === undefined) continue;
  console.log('🚀 ~ key:', value[key].innerHTML);
}
value = [...value];
console.log('🚀 ~ valueW:', Array.isArray(value));

value = Array.from(value);

console.log('🚀 ~ value:', Array.isArray(value));

value &&
  value.map((element) => {
    if (element.innerHTML === undefined) return;
    console.log('🚀 ~ element:', element.innerHTML);
  });