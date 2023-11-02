import { Link, useParams, Navigate } from "react-router-dom";
import "./vanDetails.css";
import { useState, useEffect } from "react";

export default function VanDetails() {
  const param = useParams();
  const [van, setVan] = useState(null);
  const [isfound, setIsfound] = useState(true);

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans)
        data == null ? setIsfound(false): null;
      });
  }, []);

  if (isfound == false) {
    return <Navigate to="/vans"/>
  }


  
  

  
  
  const vanEl = van ? (
    
    <>

    <div className="back">
        <Link to="/vans">
        <h3>← <span>Back to all vans</span></h3>
        </Link>
      </div>
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
    </>
  ) : (
    <h1>Loading...</h1>
  );

  return (
    <>
      <div className="vanD-con">
      {vanEl}
      </div>
    </>
  );
}
