import { useState, useEffect } from "react";

export default function HooksRule() {
  const [condition, setCondition] = useState(true);

  if (condition) {
    // won't work
    const [fail, setFail] = useState(true);
  }

  if (condition) {
    return <h1 className="text-center text-5xl text-white">Hooks Rule</h1>;
  }

  // this will also fail
  useEffect(() => {
    console.log("Hello React");
  }, []);

  return <h1 className="text-center text-5xl text-white">Hooks Rule</h1>;
}
