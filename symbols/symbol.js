let id1 = Symbol("id");
let id2 = Symbol("id");



let user = { 
    name: "John"
};
  
  let id = Symbol("id");
  
  user[id] = 1;

  console.log(user[id]);