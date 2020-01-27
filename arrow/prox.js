const object = {
  name: 'komal',
  rollNo: 12,
  id: 1
}


const handler = {
  get: function (object, key) {
    if (key === 'id') {
      return 'Key is not accessible'
    }
    return object[key] in object ? object[key]:'this is not present';
  },
  set:function(object,key,value){
    return object[key] in object ? object[key]:object[key] = value;
  }
}


const proxy = new Proxy(object, handler);
proxy.school = 'PYDS Learning Academy';
console.log(proxy);
// console.log(proxy.r);

// console.log(proxy);