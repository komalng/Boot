// Class is blueprint for an object. 

class Car{
  //constructor method is called each time the class object is initialized.
  constructor(brand){
    // we can access the brand of a car  through brand.
    this.brand = brand;
  }
  present(){
    return 'I have a '+this.brand;
  }
  static hello(){
    return 'Hello'
  }
}


// =========================================================================
// Object is an instance of a class.
const newCar = new Car('Ford');
newCar.__proto__.check = () =>{
  return 'Checking __proto__'
}

Car.prototype.h2 = ()=>{
  return 'Checking h2';
}
console.log(newCar.check(),"  " ,newCar.h2());



// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.mod = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }

//   newShow(mod){
//     this.mod = mod;
//   }
// }


// const newModel = new Model('Ford',"Mustang");
// console.log(Model)
// console.log(newModel.newShow('komal'))
// console.log(newModel);