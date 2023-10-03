import { useState, useCallback, useMemo } from "react";
import { data } from "../../../data";
import List from "./List";
import slowFunction from "./slowFunction";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people],
  );

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <button
        className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
}
