import { createContext, ReactNode, useReducer } from "react";
import Reducer from "./Reducer";

type authContextType = {
    auth: any;
    error: boolean;
    dispatch: any;
}
type Props = {
    children: ReactNode;
};


const INITIAL_STATE: authContextType = {
    auth: {
        name: "test"
    },
    error: false,
    dispatch: null,
};

export const AuthContext = createContext<authContextType>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

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
