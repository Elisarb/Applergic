import React, { useContext, useState } from "react";
import { JwtContext } from "../Shared/contexts/JwtContext";
import Scanner from "./Scanner";
import "./styles.css";


function ScannerC() {
  const {camera, setCamera} = useContext(JwtContext);
  const [result, setResult] = useState(null);
  const onDetected = result => {
    setResult(result)
    
  };
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