import React from "react";
import { FaRegClock} from "react-icons/fa";

const SecondsCounter = ({ seconds }) => {
  const formatNumber = (num) => num.toString().padStart(6, "0");
  const formattedTime = formatNumber(seconds).split("");

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "black",
      padding: "20px",
      borderRadius: "10px",
      color: "white",
      fontSize: "2rem",
      fontFamily: "monospace",
    }}>
       <div style={{
          width: "50px",
          height: "70px",
          background: "#333",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          margin: "5px",
          borderRadius: "5px",
          boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)",
          }}>
           <FaRegClock />
        </div>
      {formattedTime.map((digit, index) => (
        <div key={index} style={{
          width: "50px",
          height: "70px",
          background: "#333",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          margin: "5px",
          borderRadius: "5px",
          boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)",
        }}>
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
