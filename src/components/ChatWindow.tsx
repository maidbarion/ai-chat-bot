import React, { useState } from "react";
import "../api/sendData";
import {
  ChatWindowContainer,
  ChatHeader,
  ChatBody,
  MessageContainer,
  ChatInput,
  InputField,
  SendButton,
} from "./ChatWindow.styled";

import { sendData } from "../api/sendData";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatWindow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: messages.length,
        text: inputMessage,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      try {
        const botResponse = await sendData(inputMessage);
        if (botResponse !== null) {
          receiveMessage(botResponse);
        } else {
          console.error("Failed to get response from API");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const receiveMessage = (text: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length,
        text: text,
        sender: "bot",
      },
    ]);
  };

  return (
    <ChatWindowContainer
      data-testid="chat-window"
      className={`${isOpen ? "open" : "closed"}`}
    >
      <ChatHeader onClick={toggleChat}>Ask us a question</ChatHeader>

      <ChatBody>
        {messages.map((msg) => (
          <MessageContainer
            data-testid={
              msg.sender === "bot" ? "chat-message-bot" : "chat-message-user"
            }
            key={msg.id}
            isbot={msg.sender === "bot" ? "true" : "false"}
          >
            <div>{msg.text}</div>
          </MessageContainer>
        ))}
      </ChatBody>

      <ChatInput>
        <InputField
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={handleChange}
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </ChatInput>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
