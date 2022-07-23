import React from "react";
import { movies } from "../data";

function Movies() {
  // return <div>{/*{code here}*/}</div>;
  <h1>Movies Page</h1>;
  const movie = movies.map((element,index) => {
    return (
      <div key={index}>
        <h2>Name: {element.title}</h2>
        <h3>Time: {element.time}</h3>
        <ul>
          Genres:{" "}
          {element.genres.map((element,index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movie}
    </div>
  );
}

export default Movies;
