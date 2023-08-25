import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";
import "./vans.css";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [filter, setfilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://x3raqe.store/json/api.json")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans)});
    setIsLoading(false);
  }, []);

  const vanEl = vans.map((van) => {
    if (van.type == filter) {
      return (
        <Link key={van.id} to={van.id}>
          <div key={van.id} className="van-card">
            <img src={van.imageUrl} />
            <div className="van-info">
              <div className="van-price">
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
            </div>
            <button className={`van-type ${van.type} selected`}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </button>{" "}
          </div>
        </Link>
      );
    }
    if (filter == null) {
      return (
        <Link key={van.id} to={van.id}>
          <div key={van.id} className="van-card">
            <img src={van.imageUrl} />
            <div className="van-info">
              <div className="van-price">
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
            </div>
            <button className={`van-type ${van.type} selected`}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </button>{" "}
          </div>
        </Link>
      )
    }
  });
  return (
    <>
      <div className="vans-title">
        <h2>Explore our van options</h2>
        <ul>
          <li
            onClick={(i) => {
              setfilter(i.target.id);
            }}
            id="simple"
          >
            Simple
          </li>
          <li
            onClick={(i) => {
              setfilter(i.target.id);
            }}
            id="luxury"
          >
            Luxury
          </li>
          <li
            onClick={(i) => {
              setfilter(i.target.id);
            }}
            id="rugged"
          >
            Rugged
          </li>
          <p
            onClick={(i) => {
              setfilter(null);
            }}
          >
            Clear filters
          </p>
        </ul>
      </div>
      <div className="vans-con">
        {isLoading ? <h1>Loading...</h1> : [vanEl]}
      </div>
    </>
  );
}
