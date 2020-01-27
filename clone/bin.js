// for(var a = 0; a < 5; a++){
//   setTimeout(console.log.bind(console,a), 10);
// }

let object = {
  a:5,b:5
}

let handler = {
  get:function(object,key){
    console.log(object[key])
    return object[key] === key ? object[key] : 'not present';
  }
}

const proxy = new Proxy(object,handler)
console.log(proxy.b)