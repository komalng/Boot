const object = {
  a:1,
  b:2,
  c:3
}

const handler = {
  get:function(object,key){
    return key in object ? object[key] : 'property is not available';
  },
  set:function(object,key,value){
  object[key] = value;
  }
}


const proxy = new Proxy(object,handler);
proxy.d = 4;
proxy.e = 5;
proxy.f = 5;


console.log(proxy);