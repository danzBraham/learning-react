import { people } from "../../data";
import Person from "./Person";

export default function List() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </section>
  );
}
