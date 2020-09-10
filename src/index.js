import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationState } from "./components/Context/AuthenticationContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <Router>
        <App />
      </Router>
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById("root")
);
