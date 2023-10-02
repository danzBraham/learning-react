import UserContainer from "./UserContainer";

export default function NavLinks() {
  return (
    <nav className="flex w-[85%] items-center justify-between">
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
      <UserContainer />
    </nav>
  );
}
