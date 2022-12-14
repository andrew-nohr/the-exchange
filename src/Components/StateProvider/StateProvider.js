import React, {createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// wraps app and provides data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull's the information from the data layer
export const useStateValue = () => useContext(StateContext);