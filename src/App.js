import "./styles.css";
import { useEffect, useState } from "react";
import Accordion from "./components/Accordion"
import ProgressBar from "./components/ProgressBar"
import DataGrid from "./components/DataGrid"
import users from './data/users.json';

export default function App() {

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
        {/* <Accordion  />
        <ProgressBar /> */}
        <DataGrid users={users}/>
    </div>
  );
}
