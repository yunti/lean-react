"use strict";

function add() {
  let foo = 1;
  foo += 1;
  return foo;
}

console.log(add());
console.log(add());
console.log(add());
console.log(add());
// can no longer access foo but state reset each call
foo = 45;
console.log(add());
