import React from "react";

const Card = (prop) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={prop.imgURL}
            height={200}
            width={100}
            className="pt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{prop.name}</h2>
          <p>
            {prop.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
