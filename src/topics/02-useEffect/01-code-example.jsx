import { useState } from "react";

export default function CodeExample() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hello React");
    // infinite loop
    // setCount((currenState) => currenState + 1);
  };

  sayHello();

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">Code Example</h1>
      <h1 className="text-9xl">{count}</h1>
      <button
        className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
        onClick={() => setCount((currenState) => currenState + 1)}
      >
        Count
      </button>
    </section>
  );
}
