export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between bg-sky-600 px-5 py-3 text-white">
      <a href="Logo" className="text-2xl">
        Logo
      </a>
      <ul className="flex gap-5">
        <li>
          <a href="home">home</a>
        </li>
        <li>
          <a href="about">about</a>
        </li>
        <li>
          <a href="contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}
