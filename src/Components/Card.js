import React from "react";
import "../Components/Cards.css";
function Card({ title, img }) {
  return (
    <div className="card">
      <img src={img} alt="Error" width="290" height="170" />
      <h4>{title}</h4>
      <button>View</button>
    </div>
  );
}

export default Card;
