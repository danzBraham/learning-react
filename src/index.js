import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <main className="h-full bg-slate-900 p-5 text-white">
      <h1 className="mb-5 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Best Seller Books
      </h1>
      <section className="grid grid-cols-1 items-center justify-center gap-5 tablet:grid-cols-3 laptop:grid-cols-4">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </main>
  );
};

const Book = () => {
  return (
    <article className="flex flex-col items-center gap-3 rounded-2xl border-2 border-slate-300 bg-gradient-to-br from-slate-800 to-slate-600 p-4 shadow-md">
      <Title />
      <Image />
      <Author />
    </article>
  );
};

const Title = () => {
  return (
    <h2 className="text-center text-lg font-medium">
      The Democrat Party Hates America Hardcover
    </h2>
  );
};

const Image = () => (
  <img
    className="w-full object-cover tablet:w-5/6"
    src="./assets/images/book-1.jpg"
    alt="The Democrat Party Hates America Hardcover"
  />
);

const Author = () => {
  return <h4 className="text-lg ">Mark R. Levin</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
