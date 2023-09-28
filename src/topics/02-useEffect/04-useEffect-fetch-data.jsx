import { useState, useEffect } from "react";

export default function UseEffectFetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-3xl font-bold">Github Users</h1>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div
            key={id}
            className="flex w-full items-center gap-5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-700 p-5"
          >
            <img
              src={avatar_url}
              alt={login}
              className="w-1/4 rounded-full shadow-xl ring ring-slate-800"
            />
            <div>
              <h1 className="text-2xl font-medium">{login}</h1>
              <p>
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline"
                >
                  See on GitHub
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
