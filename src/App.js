import "./App.css";
import TopBar from "./TopBar";
import Search from "./Search";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  return (
    <Router>
      <div className="container">
        <TopBar />

        <Route path="/">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
