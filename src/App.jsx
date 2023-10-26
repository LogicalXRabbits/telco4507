import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home"
import Member from "./Pages/Member";
import Galery from "./Pages/Galery";
import FirstSemester from "./Pages/FirstSemester";
import SecondSemester from "./Pages/SecondSemester";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="Galery/FirstSemester" element={<FirstSemester />} />
        <Route path="Galery/SecondSemester" element={<SecondSemester />} />
      </Routes>
    </div>
  );
}

export default App;
