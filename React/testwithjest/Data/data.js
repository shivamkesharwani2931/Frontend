function dataMap(params){
    let value = params.filter((el)=>{
        return el.name ==='Shivam';
    });
    return value;

}

module.exports={dataMap};