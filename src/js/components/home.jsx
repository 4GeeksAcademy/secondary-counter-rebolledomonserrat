import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1); 
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{backgroundColor:"black",height: "100vh",display: "flex", justifyContent:"center", alignItems: "center", }}>
      <SecondsCounter seconds={seconds}/>
    </div>
  );
};

export default Home;
