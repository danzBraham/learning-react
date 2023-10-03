import { useState } from "react";
import { data } from "../../../data";
import Counter from "./Counter";
import List from "./List";

export default function LowerState() {
  const [people, setPeople] = useState(data);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <Counter />
      <List people={people} />
    </section>
  );
}
