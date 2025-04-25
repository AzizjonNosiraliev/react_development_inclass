import React from "react";

export default function Reuseme({name, text, img_link}) {
  return (
    <div className="card text-center ">
      <div className="card-body flex flex-col gap-3 font-bold w-50 h-50 bg-orange-600 rounded-lg shadow-lg border-2">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-sm">{text}</p>
        <img className="p-1 h-30" src={img_link} alt="" />
      </div>
    </div>
  );
}