import "./App.css";
import TopBar from "./TopBar";
import Search from "./Search";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Route path="/">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
