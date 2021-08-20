import HomeIcon from "./HomeIcon";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <HomeIcon />
          Home
        </li>
        <li className="navbar__item">TOPIC 1</li>
        <li className="navbar__item">TOPIC 2</li>
        <li className="navbar__item">TOPIC 3</li>
        <li className="navbar__item">TOPIC 4</li>
        <li className="navbar__item">TOPIC 5</li>
      </ul>
    </div>
  );
}
export default Navbar;
