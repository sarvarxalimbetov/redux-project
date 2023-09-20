import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profiles/profile";
import Sidebar from "./components/navigate/sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
