// for(var i = 0; i < 10; i++) {
 
//   setTimeout((function (i) {
//     console.log(i);
//   }), 10)
// }


for(var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 10);
}


// console.log(typeof log())