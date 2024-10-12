import { createContext, useReducer, useEffect} from 'react';

export const MessagesContext = createContext();

//this reducer manages the state frrom the application data 
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

//This is the message context provider
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