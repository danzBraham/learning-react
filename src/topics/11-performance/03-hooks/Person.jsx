export default function Person({ id, name, removePerson }) {
  console.log("render");
  return (
    <>
      <h1 className="text-2xl font-medium">{name}</h1>
      <button
        className="rounded-lg bg-sky-500 px-3 py-1"
        onClick={() => removePerson(id)}
      >
        Remove
      </button>
    </>
  );
}
