import React, { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Extrae información de la capa de datos
export const useStateValue = () => useContext(StateContext);