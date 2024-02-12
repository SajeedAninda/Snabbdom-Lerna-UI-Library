import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';

const patch = init([]);

let state = {
  count: 0
};

const updateState = (newState) => {
  state = { ...state, ...newState };
  render();
};

const createTemplate = () => {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: incrementCount } }, 'Add')
  ]);
};

const incrementCount = () => {
  updateState({ count: state.count + 1 });
};

const render = () => {
  const newVNode = createTemplate();
  patch(oldVNode, newVNode);
  oldVNode = newVNode;
};

let oldVNode = document.createElement('div');

document.addEventListener('DOMContentLoaded', () => {
  render();
  console.log('Component mounted');
});
