import Person from "./Person";

export default function List({ people }) {
  return (
    <ul>
      {people.map((person) => {
        return (
          <li key={person.id}>
            <Person name={person.name} />
          </li>
        );
      })}
    </ul>
  );
}
