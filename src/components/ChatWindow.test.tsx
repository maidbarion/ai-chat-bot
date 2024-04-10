/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ChatWindow from "./ChatWindow";

jest.mock("../api/sendData", () => ({
  sendData: jest.fn().mockResolvedValue("Bot response"),
}));

describe("ChatWindow component", () => {
  it("renders without crashing", () => {
    render(<ChatWindow />);
  });

  it("toggles chat window when header is clicked", () => {
    const { getByText, getByTestId } = render(<ChatWindow />);
    const chatHeader = getByText("Ask us a question");

    fireEvent.click(chatHeader);
    expect(getByTestId("chat-window").classList.contains("open")).toBe(true);

    fireEvent.click(chatHeader);
    expect(getByTestId("chat-window").classList.contains("closed")).toBe(true);
  });

  it("updates input value when user types", () => {
    const { getByPlaceholderText } = render(<ChatWindow />);
    const inputField = getByPlaceholderText("Type your message...");

    fireEvent.change(inputField, { target: { value: "Test message" } });
    expect(inputField).toHaveValue("Test message");
  });

  it("sends message and receives response from bot", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <ChatWindow />
    );
    const inputField = getByPlaceholderText("Type your message...");
    const sendButton = getByText("Send");

    fireEvent.change(inputField, { target: { value: "User message" } });
    fireEvent.click(sendButton);

    // Wait for bot response
    await waitFor(() => {
      expect(getByTestId("chat-message-bot")).toBeInTheDocument();
      expect(getByTestId("chat-message-bot")).toHaveTextContent("Bot response");
    });
  });
});
