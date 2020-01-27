// 

class HumanBeing {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name
  }

  // getAge = () =>{
  //   return this._age
  // }

  // setAge = (age) =>{
  //   this._name = age;
  // }
  withoutBind() {
    console.log(this);
  }

  withBind() {
    console.log(this);
  }
}



const cl = new HumanBeing('komal',12);

cl.withBind()


ko = ()=>{
  console.log("PPP");
}
ko()