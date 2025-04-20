import React from "react";

export default function Movie(props) {
  console.log(props.movie)
  return (
    <div>
      <p>This is {props.movie} movie</p>
    </div>
    
  );
}
