const mobile ={
    brand:'Samsung',
    color: 'Black',
    price: 30000,
    isNew: true
}
console.log(mobile);
for(const newObject in mobile){
    console.log( newObject);
    console.log( mobile[newObject]);
}
const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, mobile[key]);
   
}