"use strict";

function useState(initVal) {
  let _val = initVal;
  const state = _val;
  const setState = (newVal) => (_val = newVal);
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count);
useState(2);
console.log(count);
