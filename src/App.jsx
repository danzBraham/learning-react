import ErrorExamples from "./topics/01-useState/01-error-example";
import UseStateBasics from "./topics/01-useState/02-useState-basics";
import UseStateArray from "./topics/01-useState/03-useState-array";
import UseStateObject from "./topics/01-useState/04-useState-object";
import UseStateGotcha from "./topics/01-useState/05-useState-gotcha";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 p-5">
      <ErrorExamples />
      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateGotcha />
    </main>
  );
}
