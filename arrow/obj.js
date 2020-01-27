obj = {
  first:'k',
  last:'b'
}



const arr = (obj) => ({first:obj.first,last:obj.last});

console.log(arr(obj))