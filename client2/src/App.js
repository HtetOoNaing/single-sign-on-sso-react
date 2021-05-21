import React, { useState, useEffect } from "react";
import "./App.css";
let createGuest = require("cross-domain-storage/guest");
let client2Storage = createGuest("http://localhost:3000/accessStorage");
function App() {
  let [token, setToken] = useState("");
  let [date, setDate] = useState("");
  useEffect(() => {
    client2Storage.get("token", function (error, value) {
      console.log(value);
      setToken(value);
    });
    client2Storage.get("date", function (error, value) {
      setDate(value);
    });
  }, [token]);
  const addLocalStorage = () => {
    client2Storage.set("token", "hello client two token", (error, data) => {});
    client2Storage.set("date", "hello client two date", (error, data) => {});
  };
  const removeLocalStorage = () => {
    client2Storage.remove("token", (error, data) => {});
    client2Storage.remove("date", (error, data) => {});
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
