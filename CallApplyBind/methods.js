// for adding same method in different objects use call.bind and apply.


// let obj = {
//     firstName : "komal",
//     number:1
// }


// let getLastName = function (lastName) {
//     return this.firstName + " " + lastName;
// }

// // Call
// console.log(getLastNamge.call(obj,"bhatt"));
// console.log(getLastName.call(obj,"Rawat"));


// let getCurrentNumber = function (a){
//     return this.number + a
// }

// // Apply
// let arr = [1,2,3]
// console.log(getCurrentNumber.apply(obj,arr));


// // Bind


// let bindFunction = getCurrentNumber.bind(obj);
// console.log(bindFunction(arr))


let obj = {
    name:'komal',
    fun:()=>{
        console.log(this.name)
    }
}
let name = 'ko'

console.log(obj.fun.call(this))