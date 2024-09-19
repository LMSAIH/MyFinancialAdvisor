import { createContext, useReducer, useEffect} from 'react';

export const MessagesContext = createContext();

const messagesReducer = (state, action) => {

    debugger
    switch(action.type){
        case 'ADD_MESSAGES':
            return {
                messages: [...state.messages, action.payload]
            }
        case 'SET_MESSAGES':
            debugger
            return {
                messages: action.payload
            }
        default:
            return state
    }
}

export const MessagesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(messagesReducer, {
        messages: null
    });



    return (
        <MessagesContext.Provider value = {{...state, dispatch}}>
            { children }
        </MessagesContext.Provider>
    )
}