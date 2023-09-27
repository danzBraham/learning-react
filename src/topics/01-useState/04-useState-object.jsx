import { useState } from "react";

export default function UseStateObject() {
  const [person, setPerson] = useState({
    name: "zidan",
    age: 19,
    hobby: "coding",
  });

  const changePerson = () => {
    setPerson({
      name: "abraham",
      age: 20,
      hobby: "workout",
    });

    // setPerson("babi");

    // setPerson({ name: "malika" });

    // setPerson({ ...person, name: "baki" });
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">UseState Object</h1>
      <div className="grid grid-cols-3 items-center justify-items-center gap-3">
        <h3 className="text-2xl">{person.name}</h3>
        <h3 className="text-2xl">{person.age}</h3>
        <h3 className="text-2xl">{person.hobby}</h3>
      </div>
      <button
        className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
        onClick={changePerson}
      >
        Change Person
      </button>
    </section>
  );
}
