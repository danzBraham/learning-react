const Book = ({ title, author, img }) => {
  return (
    <article className="flex w-full flex-col items-center justify-between gap-3 rounded-2xl border-[1px] border-slate-300 bg-gradient-to-br from-slate-800 to-slate-600 p-4 shadow-md">
      <h2 className="text-center text-lg font-medium">{title}</h2>
      <img className="w-4/5 object-cover " src={img} alt={title} />
      <h4 className="text-lg ">{author}</h4>
    </article>
  );
};

export default Book;
