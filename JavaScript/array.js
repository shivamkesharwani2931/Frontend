// const Array=[];

const array = [
  1,
  2,
  {name:"shivam"},
  ["suraj","abhishek"],
  "sachin",
  false,
  true
];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);

for(let i=0;i<array.length;i++){
  console.log(`\n This is the value :${array[i]} \n this is index:${i}`)
};