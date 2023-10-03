import { useState, useTransition, Suspense, lazy } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));

export default function UseTransition() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);

    // Slow Down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="vite" />
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <>
      <h1 className="text-4xl font-bold">UseTransition</h1>
      <form
        autoComplete="off"
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
              value={name}
              onChange={handleChange}
              className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
            />
          </div>
        </div>
      </form>
      <h1 className="text-2xl">Items Below</h1>
      {isPending ? (
        <div className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-800 to-indigo-900 px-4 py-2">
          <h1 className="text-3xl">Loading...</h1>
        </div>
      ) : (
        <div className="grid w-full grid-cols-8 items-center justify-items-center gap-4 rounded-md bg-gradient-to-r from-blue-800 to-indigo-900 px-4 py-2">
          {items.map((item) => item)}
        </div>
      )}
      <button
        className="rounded-lg bg-violet-500 px-3 py-1 font-medium"
        onClick={() => setShow(true)}
      >
        Toggle
      </button>
      {show && (
        <Suspense fallback={<h1 className="text-3xl">Loading...</h1>}>
          <SlowComponent />
        </Suspense>
      )}
    </>
  );
}
