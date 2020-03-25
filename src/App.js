/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Component/Layout/Navbar";
import Dashboard from "./Component/Layout/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
