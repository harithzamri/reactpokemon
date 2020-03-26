/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Component/Layout/Navbar";
import Dashboard from "./Component/Layout/Dashboard";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PokemonDetails from "./Component/Pokemon/PokemonDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exatch
              path="/pokemon/:pokemonIndex"
              component={PokemonDetails}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
