import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.scss";
import "./toggleAnalysis";

window.scrollTo({top: 0});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
