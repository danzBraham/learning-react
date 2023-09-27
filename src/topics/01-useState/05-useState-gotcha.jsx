import { useState } from "react";

export default function UseStateGotcha() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    // Without a callback function, clicking multiple times within 3 seconds
    // will only increase the count by 1 because the state still holds its initial value AKA 0.
    // setTimeout(() => {
    //   console.log("Clicked without callback");
    //   setCount(count + 1);
    // }, 3000);

    // Using a callback function, clicking multiple times within 3 seconds
    // will add 1 for each click because the state is updated immediately,
    // taking the current state value into account.
    setTimeout(() => {
      console.log("Clicked with callback");
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);

    // Note: Choose whether to use a callback or not based on your specific use case.
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">UseState Gotcha</h1>
      <h1 className="text-9xl">{count}</h1>
      <button
        className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
        onClick={handleCount}
      >
        Count
      </button>
    </section>
  );
}
