function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    console.log(obj.hasOwnProperty(0))
    if (obj.hasOwnProperty(0)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  // console.log(obj);
  return result;
}


console.log(showProps({a:0,b:0},"komal"))