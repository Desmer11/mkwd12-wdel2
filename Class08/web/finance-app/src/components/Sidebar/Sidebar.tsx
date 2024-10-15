import "./Sidebar.css";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to={"/"}
          >
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to={"/budgets"}
          >
            📊 Budgets
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to={"/settings"}
          >
            ⚙️ Settings
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to={"/logout"}
          >
            🔓 Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
