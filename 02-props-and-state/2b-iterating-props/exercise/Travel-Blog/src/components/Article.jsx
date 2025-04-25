import React from "react";

export default function Article(props) {
  return (
    <div className="w-[30%] text-center">
      <img className="img-fluid" src={props.content.img} alt="featured" />
      <h2 className="text-2xl">{props.content.title}</h2>
      <p>{props.content.body}</p>
    </div>
  );
}
