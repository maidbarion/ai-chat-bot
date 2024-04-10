import styled from "styled-components";

interface MessageProps {
  isbot?: string;
}

export const ChatWindowContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &.closed {
    transform: translateY(93%);
  }
`;

export const ChatHeader = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`;

export const ChatBody = styled.div`
  height: 200px;
  overflow-y: auto;
  padding: 12px;
`;

export const MessageContainer = styled.div<MessageProps>`
  background-color: ${({ isbot }) =>
    isbot === "true" ? "#f0f0f0" : "#007bff"};
  color: ${({ isbot }) => (isbot === "true" ? "#333" : "#fff")};
  border-radius: 15px;
  margin-bottom: 10px;
  float: ${({ isbot }) => (isbot === "true" ? "right" : "left")};
  clear: both;
  max-width: 75%;
  word-wrap: break-word;
  padding: 10px;
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
