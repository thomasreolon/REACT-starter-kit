import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  name: "thom",
};

/////////////////////////// REDUCER ////////////////////////////////////

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
      };

    default:
      return state;
  }
}

//////////////////////////////// CONTEXTS ///////////////////////////////////////

// User - context data
const Context = createContext();

const withContext = (Component) => {
  const ContextComponent = (props) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
      <Component {...props} />
    </Context.Provider>
  );

  return ContextComponent;
};

//////////////////////////////// EXPORT ////////////////////////////////////////

export default {
  withContext: withContext,
  useContext: () => useContext(Context),
};
