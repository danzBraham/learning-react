import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Title />
      <Image />
      <Author />
    </article>
  );
};

const Title = () => <h2>The Democrat Party Hates America Hardcover</h2>;
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/61sp+sMfrXL._SY425_.jpg"
    alt="The Democrat Party Hates America Hardcover"
  />
);
const Author = () => <h4>Mark R. Levin</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
