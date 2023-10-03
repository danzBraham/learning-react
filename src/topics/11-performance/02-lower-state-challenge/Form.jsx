import { useState } from "react";

export default function Form({ addPerson }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(name);
    setName("");
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 p-5 md:w-1/2 lg:w-1/3"
    >
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex w-full flex-col justify-center gap-1">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-emerald-500 px-4 py-2"
      >
        Add person
      </button>
    </form>
  );
}
