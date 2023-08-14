import Nav from "../Nav/Nav";
import "./Home.css"
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans"><button>Find your van</button></Link>
      </div>
      <Footer/>
    </>
  );
}
