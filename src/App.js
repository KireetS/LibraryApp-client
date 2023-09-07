import React from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { Route , Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
    <div className="h-screen bg-blue-900">
      <Navbar />
      
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/signup" element={<SignUp />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
