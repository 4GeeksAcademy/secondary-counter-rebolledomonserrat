import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter.jsx";

let counter = 0;

const renderCounter = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("No se encontró el elemento #root");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(<SecondsCounter seconds={counter} />);
  counter++;
};

document.addEventListener("DOMContentLoaded", () => {
  renderCounter(); 
  setInterval(renderCounter, 1000);
});
