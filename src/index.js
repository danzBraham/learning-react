import React from 'react';
import ReactDOM from 'react-dom/client';

// Using JSX
function Greeting() {
  return (
    <>
      <div>
        <h1>My First Component</h1>
      </div>
      <h2>Hello World</h2>
      <input type="text" />
    </>
  );
}

// Not using JSX
// function Greeting() {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'My First Component'));
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
