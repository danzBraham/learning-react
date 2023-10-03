import { memo } from "react";
import Person from "./Person";

function List({ people, removePerson }) {
  return (
    <ul>
      {people.map((person) => {
        return (
          <li
            key={person.id}
            className="mb-2 flex items-center justify-between gap-2"
          >
            <Person {...person} removePerson={removePerson} />
          </li>
        );
      })}
    </ul>
  );
}

export default memo(List);
