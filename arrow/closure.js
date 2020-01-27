const foo = (function(){
  let isTrue = false;
  if(isTrue){
    return ;
  }
  return function(){
    isTrue = true; 
    return true;
  }
});

const fo = foo()
console.log(fo());
console.log(fo());


// module.exports.foo = 5;

// console.log(global);
