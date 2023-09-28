import { useState, useEffect } from "react";

export default function MultipleReturnsFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users/danzBraham");
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1 className="text-center text-5xl text-white">Loading...</h1>;
  }

  if (isError) {
    return (
      <h1 className="text-center text-5xl text-white">There was an error...</h1>
    );
  }

  const { login, avatar_url, followers, html_url } = user;

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <img src={avatar_url} alt={login} className="w-1/2 rounded-3xl" />
      <h1 className="text-2xl">{login}</h1>
      <h2>{followers} Followers</h2>
      <a href={html_url} className="underline" target="_blank" rel="noreferrer">
        See on github
      </a>
    </section>
  );
}
