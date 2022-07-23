import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((element,index) => {
    return (
      <div key={index}>
        <h2>{element.name}</h2>
        <ul>
          {element.movies.map((element) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
}

export default Actors;
