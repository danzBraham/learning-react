import { useState } from "react";

export default function ToggleChallenge() {
  const [showAlert, setShowAlert] = useState(false);

  // first method
  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <button
        className="rounded-lg bg-sky-500 px-4 py-2 text-2xl text-white"
        // second method
        onClick={() => setShowAlert(!showAlert)}
      >
        Toggle Me
      </button>
      {showAlert && <Alert />}
    </section>
  );
}

const Alert = () => {
  return (
    <h1 className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-5xl font-bold text-transparent md:text-8xl">
      Hello React
    </h1>
  );
};
