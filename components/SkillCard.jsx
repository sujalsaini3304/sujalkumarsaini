import React from "react";

const SkillCard = (prop) => {
  return (
    <>
         <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={prop.imgURL}
            alt="Shoes"
            style={{minHeight:240 , maxHeight:240 , height:"100%" , width:"100%"}}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title progress-success">{prop.name}</h2>
          <div className="flex items-center gap-5" >
          <progress
        className="progress progress-success w-full"
        value={prop.percent}
        max="100"
        ></progress>
        <div className="text-xl font-bold mb-1 progress-success" >{`${prop.percent}%`}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
