import { useMessagesProvider } from "../../hooks/useContextProvider";
import { useEffect } from "react";
import axios from 'axios';

export const ChatPage = () => {

    const {messages, dispatch} = useMessagesProvider();


    useEffect( () => {
        debugger
        dispatch({type: "SET_MESSAGES", payload: [{role: "user", message: 'i am here', img: ""}]})
    }, [dispatch]);


    const sendMessage = async (message) => {
        debugger
        const response = await axios.post("http://localhost:3000/openai/meta", {message: message})
        console.log(response.data.aibot)
        dispatch({type: "ADD_MESSAGES", payload: {role: "bot", message: response.data.aibot, img: ""}})
    }

    return (
        <div className="ChatPage">
            <div>
                {messages && messages.map(m => <div>{m.role}<MessageItem role={m.role} img={m.img} message={m.message} /> <hr /></div>)}
            </div>
            <button onClick={()=>{
                                    sendMessage("My like coockies");
            }}>press me</button>
        </div>

    )
}

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