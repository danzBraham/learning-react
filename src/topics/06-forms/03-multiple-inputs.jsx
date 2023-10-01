import { useState } from "react";
import Input from "./Input";

export default function MultipleInputs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(user);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Multiple Inputs</h1>
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
            value={user.name}
            placeholder="John Doe"
            handleChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            property="email"
            value={user.email}
            placeholder="youremail@gmail.com"
            handleChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            property="password"
            value={user.password}
            placeholder="Password must be at least 8 characters"
            handleChange={handleChange}
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
