import { Children, ReactNode, createContext, useReducer } from "react";
import { ActivityActions, ActivityState, activityReducer, initialState } from "../reducers/activity-reducer";

type ActvityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: React.Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActvityProvider = ({children} : ActvityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    return(
        <ActivityContext.Provider value={{
            state, 
            dispatch
        
        }}>
            {children}
        </ActivityContext.Provider>


    )
}
