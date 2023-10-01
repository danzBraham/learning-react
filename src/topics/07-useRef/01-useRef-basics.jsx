import { useState, useEffect, useRef } from "react";

export default function UseRefBasics() {
  const [count, setCount] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    alert(`Hello ${name}`);
  };

  return (
    <>
      <h1 className="text-2xl font-bold">UseRef Basics</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 p-5 md:w-1/2 lg:w-1/3"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col justify-center gap-1">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              ref={refContainer}
              className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 px-4 py-2"
        >
          Submit
        </button>
      </form>
      <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
        <h1 className="text-2xl font-bold">UseState Basics</h1>
        <h1 className="text-9xl">{count}</h1>
        <button
          className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
          onClick={() => setCount(count + 1)}
        >
          Count
        </button>
      </section>
    </>
  );
}
