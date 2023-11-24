import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
  </div>
);