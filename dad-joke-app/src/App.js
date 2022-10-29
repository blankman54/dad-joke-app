import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Joke from "./components/Joke";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import "./App.css"



function App() {

  return (
    <div className="lx-auto">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Joke/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
