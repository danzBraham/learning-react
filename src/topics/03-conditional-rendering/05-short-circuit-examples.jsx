import { useState } from "react";

export default function ShortCircuitExamples() {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Zidan");
  const [user, seetUser] = useState({ name: "Abraham" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">Short Circuit Examples</h1>
      <h1>{text || "Hello React"}</h1>
      {text && (
        <div>
          <h1>Hello {name}</h1>
          <p>Always Learn</p>
        </div>
      )}
      {user && <NameComponent name={user.name} />}
      <h1>Ternary Operator</h1>
      <button className="rounded-lg bg-blue-600 px-4 py-2">
        {isEditing ? "Edit" : "Add"}
      </button>
      {user ? (
        <div>
          <h1>Hello there {user.name}</h1>
        </div>
      ) : (
        <div>
          <h1>Please login</h1>
        </div>
      )}
    </section>
  );
}

function NameComponent({ name }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Always Coding</p>
    </div>
  );
}
