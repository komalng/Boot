// let obj = {
//   a:1,
//   b:2,
//   c:3,
//   d:{
//     a:1,
//     b:2,
//     c:3,
//   }
// }

// let array = [1,2,3,4,5];


// let jsonStringify = JSON.stringify(obj);
// let deepClone = JSON.parse(jsonStringify);
// deepClone.a = 10;
// deepClone.d.a = 10;
// console.log(obj);
// console.log( deepClone);
// console.log(jsonStringify);

console.log("===========================================================")

// =====================================================================================

// const object = {
//   a: 5,
//   b: 6,
//   c: {
//     d: 4,
//     e:7
//   }
// };





// // let mutation = object;
// // mutation.c.d = 0;
// // mutation.c.e = 0
// // console.log(mutation,"  ",object)
// let copiedObj = {};

// for (let key in object) {
//   copiedObj[key] = object[key];
// }


// copiedObj.c.d = 3;
// copiedObj.c.e = 3;
// console.log(object);
// console.log(copiedObj);


const copyObject = object => {
  // This is the object that will store the original object's properties
  let copiedObj = {};
  
  for (let key in object) {
    // This copies each property from the original object to the copy object
    copiedObj[key] = object[key];
  }

  return copiedObj;
};

const testObject = {
  a: 5,
  b: 6,
  c: {
    d: 4
  }
};
const result = copyObject(testObject);
result.c.d = 0;
console.log(result);
console.log(testObject);