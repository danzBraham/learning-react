import useToggle from "./useToggle";

export default function Toggle() {
  const { show, toggle } = useToggle(false);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-3xl font-bold">Toggle Custom Hooks</h1>
      <button
        className="rounded-lg bg-sky-500 px-4 py-2 text-2xl text-white"
        onClick={toggle}
      >
        Toggle
      </button>
      {show && (
        <h1 className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-5xl font-bold text-transparent md:text-8xl">
          Hello React
        </h1>
      )}
    </section>
  );
}
