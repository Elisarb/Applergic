import React, { useState } from "react";
import Scanner from "./Scanner";
import ReactDOM from "react-dom";

import "./styles.css";


function ScannerC() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  let idBarcode
  const onDetected = result => {
    setResult(result)
  };
  console.log(idBarcode);
  return (
    <div className="App">
      <p>{result ? result : "Scanning..."}</p>

      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}



export default ScannerC