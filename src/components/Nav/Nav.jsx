import { Link } from "react-router-dom";
import "./Nav.css"

export default function Nav(prop) {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
        <ul>
          <Link to="/about"><li style={prop.AcAb? {textDecoration: "underline"}: {textDecoration: "none"}}>About</li></Link>
          <Link to="/vans"><li style={prop.AcVa? {textDecoration: "underline"}: {textDecoration: "none"}}>Vans</li></Link>
        </ul>
      </div>
    </>
  );
}
