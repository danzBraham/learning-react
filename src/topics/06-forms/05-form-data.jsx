export default function UncontrolledInputs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    e.currentTarget.reset();
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Form Data API</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 p-5 md:w-1/2 lg:w-1/3"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col justify-center gap-1">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="must have 8 characters"
              className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}
