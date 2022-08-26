import { createContext, useReducer, useContext } from "react";

const Context = createContext();

const state = {
  fav: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        fav: action.payload,
      };
  }
};

function ContextProvider({ children }) {
  return (
    <Context.Provider value={useReducer(reducer, state)}>
      {children}
    </Context.Provider>
  );
}

export const useAppContext = () => useContext(Context);
export default ContextProvider;
