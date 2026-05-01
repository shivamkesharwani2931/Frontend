const {dataMap} = require('./data');
const {dummy} = require('./data.json');

test('to be equal',()=>{
    expect(dataMap(dummy)).toEqual([dummy[0]]);
});
    
