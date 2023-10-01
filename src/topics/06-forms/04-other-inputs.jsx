import { useState } from "react";
const frameworks = ["react", "next", "vue", "angular", "svelte"];

export default function OtherInputs() {
  const [isShipping, setIsShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setIsShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    console.log(e.target.value);
    setFramework(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ isShipping, framework });
    // do something
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Other Inputs</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 p-5 md:w-1/2 lg:w-1/3"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center gap-2 rounded-md bg-emerald-500 px-2 py-1">
            <label htmlFor="shipping" className="font-medium">
              Free Shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={isShipping}
              onChange={handleShipping}
              className="w-4 rounded-md text-sm text-black shadow-sm focus:outline-none"
            />
          </div>
          <div className="flex w-full items-center gap-2 rounded-md bg-emerald-500 px-2 py-1">
            <label htmlFor="shipping" className="font-medium">
              Frameworks
            </label>
            <select
              name="framework"
              id="framework"
              value={framework}
              onChange={handleFramework}
              className="rounded-md px-1 py-[2px] text-black"
            >
              {frameworks.map((framework) => {
                return (
                  <option key={framework} value={framework}>
                    {framework}
                  </option>
                );
              })}
            </select>
          </div>
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
