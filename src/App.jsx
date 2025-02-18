import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
