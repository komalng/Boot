var p = {
  first:'komal',
  last:'Bhatt',
  greet:function(trainer){
    console.log("hi" + trainer + " my name is : "+this.first + " "+this.last);
  }
}


var b = {
  first:'rashmi',
  last:'ras',
}

p.greet.call(b,'ash');

p.greet.apply(b,['ash']);