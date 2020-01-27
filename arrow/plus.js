for(let i = 0; i < 3; ++i){
  console.log(i);
}



obj = {
  a:0,
  b:function(){
  console.log(this.a);
  var logj = function(){
    console.log(this.a);
  }.bind(this);
  logj()
  }
}


obj.b()