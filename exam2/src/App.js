import "./App.css";
import { useEffect, useState } from "react";
import fetchClient from "./hoc/fetch";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";

function App() {
  return (
    <div className="App">
      <div className="item">
        <h1>Covid Tracker Philippines</h1>
      </div>
      <div class="container">
        <div class="row" align="center">
          <div class="col-sm-12 col-md-6">
            {" "}
            <Table1></Table1>
          </div>
          <div class="col-sm-12 col-md-6">
            {" "}
            <Table2></Table2>
          </div>
        </div>
      </div>
      <div></div>
      <div align="center"></div>

      <div></div>
    </div>
  );
}

export default App;
