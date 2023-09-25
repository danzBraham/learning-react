const Book = ({ title, author, img, number }) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-between gap-3 overflow-hidden rounded-2xl border-[1px] border-slate-300 bg-gradient-to-br from-slate-800 to-slate-600 p-4 shadow-md">
      <span className="absolute left-0 top-0 rounded-br-2xl bg-gradient-to-br from-purple-500 to-purple-900 px-2 py-3 font-medium">
        #{number + 1}
      </span>
      <h2 className="text-center text-lg font-medium">{title}</h2>
      <img className="w-4/5 object-cover " src={img} alt={title} />
      <h4 className="text-lg ">{author}</h4>
    </article>
  );
};

export default Book;
