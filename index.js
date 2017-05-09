import { h, render } from 'https://cdn.rawgit.com/rtorr/preact/master/src/preact.js';

render(
  h(
    'div',
    { id: 'foo' },
    h('span', null, 'Hello, world!'),
    h(
      'button',
      {
        onClick: function onClick(e) {
          return alert('hi!');
        }
      },
      'Click Me'
    )
  ),
  document.body
);
