import { useState } from "react";
import Input from "./Input";
import { data } from "../../data";

export default function UserChallenge() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const id = users.length === 0 ? 1 : users.slice(-1)[0].id;
    const newUser = { id: id + 1, name };
    setUsers([...users, newUser]);
    setName("");
  };

  return (
    <>
      <h1 className="text-4xl font-bold">User Challenge</h1>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:w-1/2 lg:grid-cols-3">
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div
              key={id}
              className="flex w-full items-center justify-between gap-10 rounded-md bg-gradient-to-r from-blue-800 to-indigo-900 px-4 py-2"
            >
              <h3>{name}</h3>
              <button
                onClick={() => removeUser(id)}
                className="rounded-md bg-red-500 px-2 py-1 hover:bg-red-400"
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
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
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 px-4 py-2"
        >
          Add person
        </button>
        <button
          type="button"
          onClick={() => setUsers([])}
          className="w-full rounded-md bg-emerald-500 px-4 py-2"
        >
          Clear Users
        </button>
      </form>
    </>
  );
}
