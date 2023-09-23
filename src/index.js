import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Zidan Abraham</h2>;
const Message = () => {
  return <p>Currently learning React JS</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
