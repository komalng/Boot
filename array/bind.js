// this.x = 9;    
// const modul = {
//   x: 81,
//   getX: function() { return this.x; }
// };


var a = 10;

function foo(){
  return 'koal'
}


const j = foo.bind(a);

console.log(j());
console.log(a)
// console.log(modul.getX());