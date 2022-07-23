import React from "react";
import { Route,Routes,Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  // return <div>{/*{code here}*/}</div>;
  return (
    <div className="">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/directors" element={<Directors />} />
            <Route path="/actors" element={<Actors />} />
          </Routes>
    </div>
  )
}

export default App;
