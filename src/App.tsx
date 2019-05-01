import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fs from "fs";

const root = fs.readdirSync("/");
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ fontSize: "0.5em", marginTop: "2em" }}>
          To show this process has full access, here's the contents of your /
          folder:
        </div>
        <pre style={{ fontSize: "0.5em" }}>{root.join("\n")}</pre>
      </header>
    </div>
  );
};

export default App;
