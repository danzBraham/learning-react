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
    <main className="flex flex-col gap-5 px-7 py-5 text-white">
      <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Best Seller Books
      </h1>
      <SearchBook />
      <section className="grid w-full grid-cols-1 justify-items-center gap-5 tablet:grid-cols-3 laptop:grid-cols-4">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

const SearchBook = () => {
  return (
    <section>
      <form
        autoComplete="off"
        className="flex justify-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Search book..."
          className="w-full rounded-lg border-2 border-amber-500 px-4 py-2 text-black outline-none tablet:w-1/2"
          onChange={(e) => console.log(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 px-4 py-2 text-white"
          onClick={() => console.log("Button Clicked")}
        >
          Search
        </button>
      </form>
    </section>
  );
};

const Book = ({ title, author, img }) => {
  return (
    <article
      className="flex w-full cursor-pointer flex-col items-center justify-between gap-3 rounded-2xl border-[1px] border-slate-300 bg-gradient-to-br from-slate-800 to-slate-600 p-4 shadow-md"
      onClick={() => alert(title)}
    >
      <h2 className="text-center text-lg font-medium">{title}</h2>
      <img className="w-4/5 object-cover " src={img} alt={title} />
      <h4 className="text-lg ">{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
