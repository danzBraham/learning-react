import { useState } from "react";
import { data } from "../../data.js";

export default function UseStateArray() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const clearAllItems = () => setPeople([]);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">UseState Array</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className="grid w-full grid-cols-2 items-center justify-items-center"
          >
            <p className="text-xl font-medium">{name}</p>
            <button
              className="w-fit rounded-lg bg-slate-200 px-4 py-2 text-black"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
        onClick={clearAllItems}
      >
        Clear Items
      </button>
    </section>
  );
}
