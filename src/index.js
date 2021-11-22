import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SearchProvider from "./store/search-context";
import BackdropProvider from "./store/backdrop-context";

ReactDOM.render(
  <BackdropProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </BackdropProvider>,
  document.getElementById("root")
);
