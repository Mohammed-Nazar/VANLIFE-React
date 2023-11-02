import { Outlet, useLocation,Link, NavLink } from "react-router-dom";
import "./host.css"

export const Host = () => {
  const { pathname } = useLocation();
  const navObject = ["Income", "vans", "Reviews"];

  return (
    <>
      <div className="host-nav">
        <ul>
        <NavLink end style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
            : { textDecoration: "none" }} key="1" to="/host" ><li
              className="host-van--item"
            >
              Dashboard
            </li>
            </NavLink>
          {navObject.map((el) => (
            <NavLink style={({isActive})=>isActive ? { textDecoration: "underline", textUnderlineOffset: "5px" }
            : { textDecoration: "none" }} key={el} to={el.toLowerCase()} ><li
              className="host-van--item"
            >
              {el}
            </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
