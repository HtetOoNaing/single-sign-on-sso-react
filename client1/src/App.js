import React, { useState, useEffect } from "react";
import "./App.css";
let createGuest = require("cross-domain-storage/guest");
let client1Storage = createGuest("http://localhost:3000/accessStorage");

function App() {
  let [token, setToken] = useState("");
  let [date, setDate] = useState("");
  useEffect(() => {
    client1Storage.get("token", function (error, value) {
      setToken(value);
    });
    client1Storage.get("date", function (error, value) {
      setDate(value);
    });
  }, [token]);

  const addLocalStorage = () => {
    client1Storage.set("token", "hello client one token", (error, data) => {});
    client1Storage.set("date", "hello client one date", (error, data) => {});
  };
  const removeLocalStorage = () => {
    client1Storage.remove("token", (error, data) => {});
    client1Storage.remove("date", (error, data) => {});
  };

  return (
    <div className="App">
      <header className="App-header">
        {token} <br></br>
        {date} <br></br>
        <button onClick={addLocalStorage}>add</button>
        <button onClick={removeLocalStorage}>remove</button>
      </header>
    </div>
  );
}

export default App;
