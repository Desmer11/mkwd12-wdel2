import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="heading">
      <h2>Todo app</h2>

      <nav>
        <ul className="navList">
          <li>
            {/* NavLink is same as Link */}
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <Link to="/todos">Todos</Link>
          </li>

          <li>
            <Link to="/create-todo">Create todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
