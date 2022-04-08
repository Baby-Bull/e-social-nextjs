import { createContext, ReactNode, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

type authContextType = {
    auth: any;
    error: boolean;
    dispatch: any;
}
type Props = {
    children: ReactNode;
};

const setAuthValue = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(sessionStorage.getItem("auth"));
    }
}

const INITIAL_STATE: authContextType = {
    auth: setAuthValue() || null,
    error: false,
    dispatch: null,
};

export const AuthContext = createContext<authContextType>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    useEffect(() => {
        sessionStorage.setItem("auth", JSON.stringify(state.auth));
    }, [state.auth]);
    return (
        <AuthContext.Provider
            value={{
                auth: state.auth,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
