const foo = (function () {
  let isTrue = false;
  return function () {
    if (isTrue) { return; }
    isTrue = true;
    return 'Run Once';
  }
})();



console.log(foo());
console.log(foo());