import React, { createContext, useReducer, useContext, useEffect } from "react";

const initialState = {
  user: null,
};

/////////////////////////// REDUCER ////////////////////////////////////

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

//////////////////////////////// CONTEXTS ///////////////////////////////////////

// User - context data
const Context = createContext();

const withContext = (Component) => {
  const ContextComponent = (props) => {
    // CONTEXT PROVIDER WRAPPER
    return (
      <Context.Provider value={useReducer(reducer, initialState)}>
        <Component {...props} />
      </Context.Provider>
    );
  };

  return ContextComponent;
};

//////////////////////////////// EXPORT ////////////////////////////////////////

export default {
  withContext: withContext,
  useContext: () => useContext(Context),
};
