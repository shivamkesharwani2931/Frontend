let obj={
  name:"Shivam",
  age:23,
}

//create
obj.location="Andheri";
console.log(obj);

//read
console.log(obj.location);

//update
obj.location="Thane";
console.log(obj);

//delete
delete obj.location;
console.log(obj)


let object ={
  animal:'cat',
  married:false,
  age:44,
  city:['city','mumbai','lucknow','banglore'],
  hobbie:{
    virtual:'pub-g',
    outdoor:'football',
    indoor:'carrom'
  },myName:function(){
    console.log(this.animal);
  },
};

for(let key in object){
  console.log(`${key} : ${object[key]}`);
}