// var tasks = [
 
//     {
   
//       'name'     : 'Write for Envato Tuts+',
   
//       'duration' : 120
   
//     },
   
//     {
   
//       'name'     : 'Work out',
   
//       'duration' : 60
   
//     },
   
//     {
   
//       'name'     : 'Procrastinate on Duolingo',
   
//       'duration' : 240
   
//     }
   
//   ];

// // map

// var task_names = tasks.map(function (task, index, array) {
//   return task.name + "good"; 
// });

// console.log(task_names);

// // Filter 
// var task_duration = tasks.filter((task)=> {
 
//     return task.duration > 100
  
// });
// console.log('Task filter result = ' + task_duration);


// // let taskDurationAdd = tasks.reduce((element, current) =>{
// //   console.log('element duration' , element)
// //   return element.duration + current; 
// // });

// // console.log('Task duration result = ' +taskDurationAdd);


// // let array = [1,2,43,5];

// // const task = array.reduce((element,current)=>{
  
// // })


// const data = [5, 10, 15, 20, 25];

// const res = data.reduce((total,currentValue) => {
//   return total + currentValue;
// });

// console.log(res); // 75

console.log([2, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  console.log(accumulator);
  return accumulator + currentValue
},""));

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.
