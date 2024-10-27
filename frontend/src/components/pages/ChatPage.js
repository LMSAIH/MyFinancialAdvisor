import { useMessagesProvider } from "../../hooks/useContextProvider";
import { useEffect } from "react";
import axios from 'axios';

//chatpage element for the chatpage
export const ChatPage = () => {

    //call the provider for the messages dispatch
    const {messages, dispatch} = useMessagesProvider();


    //Get rid of the debugger. This effect is setting the payload with the current information from the user 
    useEffect( () => {
        debugger
        dispatch({type: "SET_MESSAGES", payload: [{role: "user", message: 'i am here', img: ""}]})
    }, [dispatch]);

    //Function to send an async request with the message to the api 
    const sendMessage = async (message) => {
        debugger
        const response = await axios.post("http://localhost:3000/openai/meta", {message: message})
        console.log(response.data.aibot)
        dispatch({type: "ADD_MESSAGES", payload: {role: "bot", message: response.data.aibot, img: ""}})
    }

    //The chat page returned elements
    return (
        <div className="ChatPage">
            <div>
                {messages && messages.map(m => <div>{m.role}<MessageItem role={m.role} img={m.img} message={m.message} /> <hr /></div>)}
            </div>
            <button onClick={()=>{
                                    sendMessage("My like coockies");
            }}>press me to be happy</button>
        </div>

    )
}

//This is the message item component to provide in the app
const MessageItem = (props) => {

    return (
        <div className={props.role == 'user' ? "UserMessage" : "BotMessage"}>
            <div>
                {props.author}
            </div>
            <div>
                <img src={props.img} alt="Image here" />
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )
}