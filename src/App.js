import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import GeneratePaper from "./components/GeneratePaper/GeneratePaper";
import Questions from "./components/Questions/Questions";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add-question" element={<AddQuestion />} />
        <Route path="/Create-paper" element={<GeneratePaper />} />
        <Route path="/view-questions" element={<Questions />} />
      </Routes>

      <Footer></Footer>

    </Router>
  )
}

export default App;
