import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import books from "./books.js";
import SearchBook from "./SearchBook.js";
import Book from "./Book.js";

const BookList = () => {
  document.documentElement.style.backgroundColor = "#0f172a";

  return (
    <main className="flex flex-col gap-5 px-7 py-5 text-white">
      <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Best Sellers Books
      </h1>
      <SearchBook />
      <section className="grid w-full grid-cols-1 justify-items-center gap-5 tablet:grid-cols-3 laptop:grid-cols-4">
        {books.map((book, index) => (
          <Book key={book.id} {...book} number={index} />
        ))}
      </section>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
