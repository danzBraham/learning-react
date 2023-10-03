import { useState } from "react";
import { data } from "../../../data";
import Form from "./Form";
import List from "./List";

export default function LowerStateChallenge() {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    if (!name) return;
    const id = people.length === 0 ? 1 : people.slice(-1)[0].id;
    const newUser = { id: id + 1, name };
    setPeople([...people, newUser]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Lower State Challenge</h1>
      <Form addPerson={addPerson} />
      <List people={people} />
    </>
  );
}
