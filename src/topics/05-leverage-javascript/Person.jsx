export default function Person({ name, nickName = "Banana", images }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80";

  // Before using optional chaining
  // const img = images && images[0] && images[0].small && images[0].small.url;

  // After using optional chaining
  // you can use ?? operator
  // const img = images?.[0]?.small?.url ?? defaultImage;
  // or || operator
  const img = images?.[0]?.small?.url || defaultImage;

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-sky-800 p-4">
      <img src={img} alt={name} className="w-1/2 rounded-full" />
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-xl">Nickname: {nickName}</h1>
    </div>
  );
}
