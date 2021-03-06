let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 'not present'; // default value
    }
  }
});

console.log( numbers[1] ); // 1
console.log( numbers[123] ); 