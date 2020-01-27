let array = [1,2,3];


let reduce = array.reduce((accumulator,currentValue)=>{
     console.log(accumulator,currentValue);
     return accumulator + currentValue
},"");


console.log(typeof reduce);