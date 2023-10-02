import { useReducer } from "react";
import { data } from "../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";

const defaultValue = {
  people: data,
};

export default function UseReducerBasics() {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-slate-400 bg-gradient-to-br from-slate-900 to-slate-600 p-5 text-white shadow-md lg:w-1/2">
      <h1 className="text-2xl font-bold">UseReducer</h1>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className="grid w-full grid-cols-2 items-center justify-items-center"
          >
            <p className="text-xl font-medium">{name}</p>
            <button
              className="w-fit rounded-lg bg-slate-200 px-4 py-2 text-black"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
          onClick={resetList}
        >
          Reset Items
        </button>
      ) : (
        <button
          className="w-full rounded-lg bg-slate-200 px-4 py-2 text-black"
          onClick={clearList}
        >
          Clear Items
        </button>
      )}
    </section>
  );
}
