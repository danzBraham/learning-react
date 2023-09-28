import { useState } from "react";

export default function UserChallenge() {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: "Abraham" });
  const logout = () => setUser(null);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <button className="rounded-lg bg-sky-500 px-4 py-2" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Please login</h1>
          <button className="rounded-lg bg-sky-500 px-4 py-2" onClick={login}>
            Login
          </button>
        </>
      )}
    </section>
  );
}
