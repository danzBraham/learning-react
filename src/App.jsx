// useState Hook
// import ErrorExamples from "./topics/01-useState/01-error-example";
// import UseStateBasics from "./topics/01-useState/02-useState-basics";
// import UseStateArray from "./topics/01-useState/03-useState-array";
// import UseStateObject from "./topics/01-useState/04-useState-object";
// import UseStateGotcha from "./topics/01-useState/05-useState-gotcha";

// useEffect Hook
// import CodeExample from "./topics/02-useEffect/01-code-example";
// import UseEffectBasics from "./topics/02-useEffect/02-useEffect-basics";
// import UseEffectMultiple from "./topics/02-useEffect/03-useEffect-multiple-effects";
// import UseEffectFetchData from "./topics/02-useEffect/04-useEffect-fetch-data";

// Conditional Rendering
import MultipleReturnsBasics from "./topics/03-conditional-rendering/01-multiple-returns-basics";
import MultipleReturnsFetchData from "./topics/03-conditional-rendering/02-multiple-returns-fetch-data";
import HooksRule from "./topics/03-conditional-rendering/03-hooks-rule";
import ShortCircuitOverview from "./topics/03-conditional-rendering/04-short-circuit-overview";
import ShortCircuitExamples from "./topics/03-conditional-rendering/05-short-circuit-examples";
import ToggleChallenge from "./topics/03-conditional-rendering/06-toggle-challenge";
import UserChallenge from "./topics/03-conditional-rendering/07-user-challenge";

export default function App() {
  document.documentElement.style.backgroundColor = "#020617";

  return (
    <main className="flex flex-col items-center justify-center gap-5 p-5">
      <MultipleReturnsBasics />
      <MultipleReturnsFetchData />
      <HooksRule />
      <ShortCircuitOverview />
      <ShortCircuitExamples />
      <ToggleChallenge />
      <UserChallenge />
    </main>
  );
}
