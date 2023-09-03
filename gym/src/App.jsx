import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contract from "./component/contract/Contract";
import Gallery from "./component/gallery/Gallery";
import Plans from "./component/plans/Plan";
import Trainers from "./component/trainers/Trainers";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {<Navbar />}
        <div className=" bg-indigo-600 w-full h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/trainers/:name" element={<Trainers />} />
            {/* Add a 404 route if needed */}
          </Routes>
          <h1 className=" bg-red-700">HHHHH</h1>
        </div>
      </BrowserRouter>
    </div>
  );
}
