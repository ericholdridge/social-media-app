import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthenticationState } from "./components/Context/AuthenticationContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <App />
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById("root")
);
