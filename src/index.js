import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { FirebaseUpdater } from "./scripts/firebase";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseUpdater />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
