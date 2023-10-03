import { useState } from "react";

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img src="/vite.svg" alt="vite" />
    </div>
  );
});

export default function SlowComponent() {
  const [items, setItems] = useState(newItems);

  return (
    <div className="grid w-full grid-cols-8 items-center justify-items-center gap-4 rounded-md bg-gradient-to-r from-blue-800 to-indigo-900 px-4 py-2">
      {items.map((item) => item)}
    </div>
  );
}
