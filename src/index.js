import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import contexts from "./scripts/contexts";
import { compose } from "recompose";

const MyApp = compose(
  // list the context you want to use here
  contexts.user.withContext
)(App);

ReactDOM.render(<MyApp />, document.getElementById("root"));
