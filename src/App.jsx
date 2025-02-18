import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingleArticlePage from "./components/SingleArticlePage";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route path="*" element={<p>page not found</p>} />
      </Routes>
    </>
  );
}

export default App;
