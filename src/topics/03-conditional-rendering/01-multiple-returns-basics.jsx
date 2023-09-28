import { useState, useEffect } from "react";

export default function MultipleReturnsBasics() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <h1 className="text-9xl text-white">Loading...</h1>;
  }

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1>Multiple Returns Basics</h1>
    </section>
  );
}
