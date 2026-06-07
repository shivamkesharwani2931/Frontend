import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">

      <a href={props.elem.url} target="_blank" rel="noreferrer">

        <div className="img-box">
          <img src={props.elem.download_url} alt="img" />
        </div>

        <h2 className="author">{props.elem.author}</h2>

      </a>

    </div>
  );
};

export default Card;