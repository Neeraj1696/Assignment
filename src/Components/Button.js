import React from "react";
import "../Components/Header.css";
function Button({ Icon, title }) {
  return (
    <div className="button">
      <h5>{Icon}</h5>
      <h4>{title}</h4>
    </div>
  );
}

export default Button;
