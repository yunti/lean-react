"use strict";

function getAdd() {
  let foo = 1;
  return function () {
    foo += 1;
    return foo;
  };
}
const add = getAdd();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
// now with a closure state is private and not reset
foo = 45;
console.log(add());
