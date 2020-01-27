// for(var i = 1;i < 10 ; i++){
//   check(i);
// }


// function doSetTimeout(i) {
//   setTimeout(function() { console.log(i); }, 100);
// }
// for (var i = 1; i <= 2; ++i)
//   doSetTimeout(i);

// async function Something(){
//   console.log(1);
//   await 1;
//   console.log(2);
//   await 2;
//   console.log(3);
// }

// console.log(0);
// Something();
// console.log(4)
// console.log(5);


let obj = {
  a: 1,
  b: 2,
  c: 3,
  sender: 123,
}

let hendler = {
  get: function(obj, key){
      if(key === 'sender'){
          return 'You Can\'t Access';
      }

      return obj[key] ? obj[key] : 'Message';
  },
  set: function(obj, key, value){
      obj[key] = value;
  }
}

let proxObj = new Proxy(obj, hendler);
proxObj.c = 1000;
console.log(proxObj);


