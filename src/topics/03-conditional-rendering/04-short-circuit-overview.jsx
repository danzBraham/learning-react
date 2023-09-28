import { useState } from "react";

export default function ShortCircuitOverview() {
  const [isFalsy, setIsFalsy] = useState("");
  const [isTruthy, setIsTruthy] = useState("Zidan");

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">Short Circuit Overview</h1>
      <h1>Falsy OR: {isFalsy || "Hello React"}</h1>
      <h1>Falsy AND: {isFalsy && "Hello React"}</h1>
      <h1>Truthy OR: {isTruthy || "Hello React"}</h1>
      <h1>Truthy AND: {isTruthy && "Hello React"}</h1>
    </section>
  );
}
