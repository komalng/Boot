const arr = [1,2,3];


console.log(arr.reduce((a,c) => {
  console.log(a,"====");
  return a+c
}));