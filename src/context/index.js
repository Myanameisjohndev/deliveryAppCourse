import React, { createContext, useContext } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
    return (
        <Context.Provider value={{ user: { name: '' } }}>
            {children}
        </Context.Provider>
    )
}

function useAppContext() {
    const context = useContext(Context);
    return context;
}

export { ContextProvider, useAppContext };