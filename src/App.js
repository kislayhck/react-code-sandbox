import "./styles.css";
import { useEffect, useState } from "react";
import Accordion from "./components/Accordion"
import ProgressBar from "./components/ProgressBar"

export default function App() {

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
        <Accordion  />
        <ProgressBar />
    </div>
  );
}
