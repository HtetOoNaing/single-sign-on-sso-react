import React from "react";
import "./App.css";
let createHost = require("cross-domain-storage/host");
let storageHost = createHost([
  {
    origin: "http://localhost:3001",
    allowedMethods: ["get", "set", "remove"],
  },
  {
    origin: "http://localhost:3002",
    allowedMethods: ["get", "set", "remove"],
  },
]);

function App() {
  let token = localStorage.getItem("token");
  let date = localStorage.getItem("date");

  const addLocalStorage = () => {
    localStorage.setItem("token", "hello host token");
    localStorage.setItem("date", "hello host date");
  };
  const removeLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("date");
  };
  return (
    <div className="App">
      <header className="App-header">
        {token}
        <br></br>
        {date}
        <br></br>
        <button onClick={addLocalStorage}>add</button>
        <button onClick={removeLocalStorage}>remove</button>
      </header>
    </div>
  );
}

export default App;
