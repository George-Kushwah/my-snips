import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Menu: any = ["Action", "Drop"];
  const Logics: any = ["Green-Light", "Accodotion", "Dragdrop"];
  const [drop, setdrop] = React.useState<boolean>(false);
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
          <li>
            <NavLink
              to="New-skills"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              New Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Memo"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Use Memo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Logic-Part-1"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              Logic Part-1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="apicall"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              API Call
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Newgl"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              New Logics-1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Newgl-2"
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              New Logics-2
            </NavLink>
          </li>
          <li
            className={`dropdown idse ${drop ? "active" : ""}`}
            onClick={() => setdrop(!false)}
          >
            All-Logis
          </li>
          {drop && (
            <div className="drops1">
              {Logics.map((item: any, ind: any) => {
                return (
                  <li key={ind}>
                    <NavLink
                      onClick={() => setdrop(false)}
                      to={`New-Logics/${item}`}
                      className={({ isActive }) =>
                        `${isActive ? "active" : ""}`
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
