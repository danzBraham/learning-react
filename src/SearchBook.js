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

export default SearchBook;
