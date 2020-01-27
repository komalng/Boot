function Human(name,age){
  this.name = name;
  this.age = age;
}

// Human.prototype.getName = function(){
//   return this.name;
// }
// Human.prototype.getAge = function(){
//   return this.age;
// }



function Doctor(name,age,hospital){
  Human.call(this,name,age);
  this.hospital = hospital;

  this.getH = function(){
      return this.hospital;
  }
}

Doctor.prototype = Object.create(Human.prototype);
// Doctor.prototype = Object.create(Human.prototype);
const swami = new Doctor('Swami',21,'rrr');
console.log(swami);

arr.some(e,index)