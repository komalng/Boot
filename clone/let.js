// create a variable within lexical ScopedCredential,local scope and block scope.

let foo = function(){
  var x = 10;
  if(x > 5){
    let x = 5
    console.log('inside :-' + x)
  }
  console.log('outside:- '+x)
}

foo();




for(let i = 0; i < 5; i++){
  console.log(i);
}

console.log(i);