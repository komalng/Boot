
//1:-

// function foo() {
//   let a = b = 0;
//   a++;
//   return a;
// }

// console.log(foo());
// console.log(typeof a);
// console.log(typeof b);



// ==================================================



// const clothes = ['jacket', 't-shirt'];
// clothes.length = 1;

// console.log(clothes[1]);



//=============================================

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }

// console.log(numbers); 

//===============================================



// function arrayFromValue(item) {
//   return 
//   [item];
// }

// console.log(arrayFromValue(10)); 


// ============================================

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }


//  ======================================================

// console.log(0.1 + 0.2 === 0.3);


// ====================================================

 
// console.log(myVar);   // => ???
// console.log(myConst); // => ???

// var myVar = 'value';
// const myConst = 3.14;


//  =============================================



function foo() {
  let a;
  window.b = 0;
  a = window.b;
  a++;
  return a;
}

foo();
console.log(typeof a);       
console.log(typeof window.b);