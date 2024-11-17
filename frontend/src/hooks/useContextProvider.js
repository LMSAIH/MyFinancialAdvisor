import { useContext } from "react"
import { MessagesContext } from "../context/messagesContext";

//provide the context for the user
export const useMessagesProvider = () => {

    const context = useContext(MessagesContext);

    return context
}