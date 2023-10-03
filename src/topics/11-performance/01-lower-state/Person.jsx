export default function Person({ name }) {
  console.log("render");
  return <h1 className="text-2xl font-medium">{name}</h1>;
}
