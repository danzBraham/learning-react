import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    title: "The Shadow Work Journal",
    author: "Keila Shaheen",
    img: "./assets/images/book-1.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    img: "./assets/images/book-2.jpg",
  },
  {
    id: 3,
    title: "Build the Life You Want",
    author: "Arthur C. Brooks, Oprah Winfrey",
    img: "./assets/images/book-3.jpg",
  },
  {
    id: 4,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    img: "./assets/images/book-4.jpg",
  },
];

const BookList = () => {
  document.documentElement.style.backgroundColor = "#0f172a";
  return (
    <main className="p-5 text-white">
      <h1 className="mb-5 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Best Seller Books
      </h1>
      <section className="grid w-full grid-cols-1 justify-items-center gap-5 tablet:grid-cols-3 laptop:grid-cols-4">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

const Book = ({ title, author, img }) => {
  return (
    <article className="flex flex-col items-center justify-between gap-3 rounded-2xl border-[1px] border-slate-300 bg-gradient-to-br from-slate-800 to-slate-600 p-4 shadow-md">
      <h2 className="text-center text-lg font-medium">{title}</h2>
      <img className="w-4/5 object-cover " src={img} alt={title} />
      <h4 className="text-lg ">{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
