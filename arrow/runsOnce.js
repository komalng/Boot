var myFunc = function func(){
  if( myFunc.fired ) return;
  myFunc.fired = true;
  console.log('called once and never again!');
  return myFunc.fired ; // your stuff here
};

console.log(myFunc());
console.log(myFunc());

// even if referenced & "renamed"
// ((refToMyfunc)=>{
// setInterval(refToMyfunc, 1000);
// })(myFunc)



// function Once(){
//   console.log("run");

//   Once = function(){};
// }

// Once(); // run
// Once(); // nothing happens






// function once(func) {
//   return function () {
//       var f = func;
//       func = null;
//       return f.apply(
//           this,
//           arguments
//       );
//   };
// }


// once();


