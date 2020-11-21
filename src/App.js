import "./App.css";
import TopBar from "./TopBar";
import Search from "./Search";
import React from "react";

function App() {
  return (
    <div className="Base-container">
    <div className="container">
        <TopBar />
      <div className="container">
          <Search />
      </div>
    </div>
    </div>
  );
}

export default App;
