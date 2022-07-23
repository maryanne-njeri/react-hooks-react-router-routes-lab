import React from "react";
import { directors } from "../data";

function Directors() {
  // return <div>{/*{code here}*/}</div>;
  <h1>Directors Page</h1>;
  const director = directors.map((element,index) => {
    return (
      <div key={index}>
        <h2>{element.name}</h2>
        <ul>
          {element.movies.map((element,index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
