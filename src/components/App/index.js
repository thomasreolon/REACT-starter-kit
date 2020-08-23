import React from "react";

import contexts from "../../scripts/Contexts";
import { compose } from "recompose";

import Navbar from "../Navbar";

// App Component
function App() {
  return <Navbar />;
}

export default compose(
  // list the context you want to use here
  contexts.user.withContext
)(App);
