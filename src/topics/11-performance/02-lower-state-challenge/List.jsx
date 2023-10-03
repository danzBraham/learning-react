import Person from "./Person";

export default function List({ people }) {
  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:w-1/2 lg:grid-cols-3">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className="flex w-full items-center justify-center gap-10 rounded-md bg-gradient-to-r from-blue-800 to-indigo-900 px-4 py-2"
          >
            <Person name={name}/>
          </div>
        );
      })}
    </div>
  );
}
