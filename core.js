let foo = 1;
function add() {
  foo += 1;
  return foo;
}

console.log(add());
console.log(add());
console.log(add());
console.log(add());
foo = 45;
console.log(add());
