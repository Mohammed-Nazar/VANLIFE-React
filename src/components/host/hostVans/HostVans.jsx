import React, { useEffect, useState } from "react";

const HostVans = () => {
  const [UserVnas, setUserVnas] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setUserVnas([data]));
  }, []);

  const vansEl = UserVnas.map((el)=>{
    console.log(el)
    return (
        <div key={el.id} className="host-vans-item">
            <img src={el.imageUrl} alt="" />
        </div>
    );
  });
  
  return <>
  <div className="host-vans-list">
  <h1 className="host-vans-list--header">
  Your listed vans
  </h1>
  {vansEl}
  </div>
  </>;
};

export default HostVans;
