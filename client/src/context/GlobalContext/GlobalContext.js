import { createContext, useReducer } from "react";
import GlobarReducer from './GlobalReducer'

// 1. Vyplnit defaultní state

const hlavniState = {
    surovina: ""
}

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobarReducer, hlavniState)
    // 3. funkce která manipuluje s příslušným statem z bodu jedna
    const zmenSurovinu = (surovina) => {
        dispatch({
            type:"ZMENA_SUROVINY",
            payload:surovina
        })
    }
    
    return (
        <GlobalContext.Provider
        //2. Propíšeme hodnotu ze statu
            value={{
                surovina: state.surovina,
                zmenSurovinu
                //seznam vybraných surovin do receptu
            }}    
        >
    
            {children}
        </GlobalContext.Provider>
    )
}