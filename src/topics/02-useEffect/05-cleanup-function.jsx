import { useState, useEffect } from "react";

export default function CleanupFunction() {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <button
        className="rounded-lg bg-sky-500 px-4 py-2 text-2xl text-white"
        onClick={() => setToggle(!toggle)}
      >
        Toggle Me
      </button>
      {toggle && <Greeting />}
    </section>
  );
}

function Greeting() {
  useEffect(() => {
    // Example 1:
    // console.log("Hello React");
    // const intId = setInterval(() => {
    //   console.log("Hello Interval");
    // }, 1000);
    // return () => {
    //   clearInterval(intId);
    //   console.log("cleanup");
    // };

    // Example 2:
    const someFunc = () => {
      // Some Logic
    };
    window.addEventListener("scroll", someFunc);

    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);

  return (
    <h1 className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-5xl font-bold text-transparent md:text-8xl">
      Hello React
    </h1>
  );
}
