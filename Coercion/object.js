

const object = {
  a: 1,
  b: {
    c: 2
  },
  c:{
    d:4
  }
};


newObject = {}

for (let key in object) {
  let value = object[key];
  if (typeof value === "object") {
    let childObject = {}
    for (let childKey in value) {
      childObject[childKey] = value[childKey];
    }
    newObject[key] = childObject;
  }
  else {
    newObject[key] = value

  }
}
newObject.b.c = 0;
object.b.c = 12;

console.log(object);
console.log(newObject);