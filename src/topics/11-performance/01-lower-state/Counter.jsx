import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
}
