import React, { createContext, useReducer, useContext } from "react";

const userInitialState = {
  user: null,
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
const UserContext = createContext();

const withUserContext = ({ children }) => (
  <UserContext.Provider value={useReducer(reducer, userInitialState)}>
    {children}
  </UserContext.Provider>
);

const useUserState = () => useContext(UserContext);

//////////////////////////////// EXPORT ////////////////////////////////////////

export default {
  user: {
    getContext: withUserContext,
    useState: useUserState,
  },
};
