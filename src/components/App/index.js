import React from "react";
import "./App.css";
import contexts from "../../scripts/Contexts";
import Navbar from "../Navbar";

function App() {
  return <Navbar />;
}

export default contexts.user.withContext(App);
