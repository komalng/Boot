


obj = {
  name:"komal",
  rollNo:12,
  class:"10th",
  foo:function (){
    console.log(this.name);
    return function(){ 
      return "koaml"
    }
  },
  arrow:()=>{
    return () =>{
    console.log(this.name);
    }
  }
}

a = obj.foo()
console.log(a());

// obj.foo()();
obj.arrow();


