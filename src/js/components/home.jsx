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

  return <SecondsCounter seconds={seconds} />;
};

export default Home;
