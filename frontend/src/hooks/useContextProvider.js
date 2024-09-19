import { useContext } from "react"
import { MessagesContext } from "../context/messagesContext";

export const useMessagesProvider = () => {

    const context = useContext(MessagesContext);

    return context
}