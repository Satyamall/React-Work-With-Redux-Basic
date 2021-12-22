import React, { createContext } from "react";

export const AppContext=createContext();


function AppContextProvider({children,Store}){
    const {dispatch,getState}=Store;
    const value={dispatch,getState}
   return(
       <AppContext.Provider value={value}>
           {children}
       </AppContext.Provider>
   )
}

export {AppContextProvider};