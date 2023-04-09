import { createContext, useMemo, useReducer } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.payload
      }

    case 'LIGHT_THEME':
      return {
        ...state,
        theme: 'light'
      }
    
    case 'DARK_THEME':
      return {
        ...state,
        theme: 'dark'
      }
    
    default:
      return state;
  }
}

export const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch]=useReducer(reducer, initialState)
  // const value = useMemo(() => ({
  //   updateData: () => {
  //     dispatch()
  //   }
  // }), [state, dispatch])
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
