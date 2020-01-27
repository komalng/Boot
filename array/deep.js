const object = {a:1,b:2,c:{b:1,c:{k:0}},h:9};



function deepClone(object){
    let newObject = {};
    for(let key in object){
        if(typeof object[key] === 'object'){
          // console.log(newObject)
            newObject[key] = deepClone(object[key]);
        }
        else{
            newObject[key] = object[key];
        }

    }
    return newObject
}



const pro = (deepClone(object));
// pro.c.b = 10;
console.log(pro);
// console.log(object);
