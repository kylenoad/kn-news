import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

import SingleArticlePage from "./components/SingleArticlePage";
import { UserAccount, UserAccountProvider } from "./Contexts/UserAccount";

function App() {
  return (
    <>
      <UserAccountProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/articles/:article_id" element={<SingleArticlePage />} />
          <Route path="/home/:topic" element={<Homepage />} />
          <Route path="*" element={<p>page not found</p>} />
        </Routes>
      </UserAccountProvider>
    </>
  );
}

export default App;
