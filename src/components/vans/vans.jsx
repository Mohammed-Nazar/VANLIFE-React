import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";
import "../../server";
import "./vans.css"

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanEl = vans.map(van => (
    <div key={van.id} className="van-card">
      <img src={van.imageUrl}/>
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>{" "}
    </div>
  ));
  return (
    <>
      <Nav AcVa={true} />
      <div className="vans">
        <h2>Explore our van options</h2>
        <ul>
          <li>Simple</li>
          <li>Luxury</li>
          <li>Rugged</li>
          <p>Clear filters</p>
        </ul>
      </div>
      <div className="vans-con">
      {vanEl}
      </div>
      <Footer />
    </>
  );
}
