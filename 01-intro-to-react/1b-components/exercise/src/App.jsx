import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./App.css";


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
