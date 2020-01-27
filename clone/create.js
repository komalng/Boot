// function fruits() {
//   this.name = 'fruit 1';
//   this.season = 'summer';
// }

// function apple() {
//   fruits.call(this);
// }


// apple.prototype = Object.create(fruits.prototype);
// const app = new apple();
// console.log(app.name);
// console.log(app.season);


let array = {a:2,b:2};

for(let ar in array){
  console.log(ar);
}