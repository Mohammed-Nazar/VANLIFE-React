import { Link, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./vanDetails.css";
import { useState, useEffect } from "react";
import Footer from "../footer/footer";

export default function VanDetails() {
  const param = useParams();
  const [van, setVan] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
    setIsLoading(false);
  }, []);

  
  
  
  const vanEl = isLoading || Object.keys(van).length === 0? (
    <h1>Loading...</h1>
  ) : (
    <div className="vanD">
      <img src={van.imageUrl} />
      <button className={`van-type ${van.type} selected`}>{van.type}</button>
      <h2>{van.name}</h2>
      <p className="van-p">
        ${van.price}<span>/day</span>
      </p>
      <p className="van-des">{van.description}</p>
      <button className="rent-btn">Rent this van</button>
    </div>
  );

  return (
    <>
      <Nav />
      <div className="vanD-con">
      <div className="back">
        <Link to="/vans">
        <h3>← <span>Back to all vans</span></h3>
        </Link>
      </div>
      {vanEl}
      </div>
      <Footer/>
    </>
  );
}
