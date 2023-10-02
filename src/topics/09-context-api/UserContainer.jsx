import { useAppContext } from "./Navbar";

export default function UserContainer() {
  const { user, logout } = useAppContext();

  return (
    <div>
      {user ? (
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-medium">Hello {user.name}</h3>
          <button
            className="rounded-lg bg-violet-700 px-3 py-1 text-xl text-white"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
