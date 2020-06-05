"use strict";

const React = (function () {
  function useState(initVal) {
    let _val = initVal;
    const state = () => _val;
    const setState = (newVal) => (_val = newVal);
    return [state, setState];
  }
  return { useState };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1),
  };
}

console.log(count());
setCount(2);
console.log(count());
