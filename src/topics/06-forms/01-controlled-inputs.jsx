import { useState } from "react";
import Input from "./Input";

export default function ControlledInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log({ name, email });
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Controlled Input</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 p-5 md:w-1/2 lg:w-1/3"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <Input
            label="Name"
            type="text"
            property="name"
            value={name}
            placeholder="John Doe"
            handleChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            property="email"
            value={email}
            placeholder="youremail@gmail.com"
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}
