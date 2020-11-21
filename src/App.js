import "./App.css";
import TopBar from "./TopBar";
import Search from "./Search";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="Base-container">
    <div className="container">
    <Router>
        <TopBar />
      <div className="container">
        <Route path="/">
          <Search />
        </Route>
      </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
