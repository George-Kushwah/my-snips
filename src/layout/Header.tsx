import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Menu: any = ["Action", "Drop"];
  return (
    <div className="container-fluid p-0">
      <div className="nav-bar">
        <ul>
          <li>
            <NavLink
              to="Home"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="life-cycle"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Life Cycle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="hoc"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              HOC
            </NavLink>
          </li>
          <li>
            <NavLink
              to="hooks"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Hooks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="props"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Props Types
            </NavLink>
          </li>
          {Menu.map((item: any, ind: any) => {
            return (
              <li key={ind}>
                <NavLink
                  to={`User/${item}`}
                  className={({ isActive }) => `${isActive ? "active" : ""}`}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
                <li>
            <NavLink
              to="New-tech"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
         New Tech
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
