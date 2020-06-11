"use strict";

const React = (function () {
  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => (hooks[_idx] = newVal);
    idx++;
    return [state, setState];
  }
  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged) cb();
    hooks[idx] = depArray;
    idx++;
  }
  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }
  return { useState, useEffect, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("apple");
  React.useEffect(() => {
    console.log("jsconffff");
  }, [count]);
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("pear");
var App = React.render(Component);
