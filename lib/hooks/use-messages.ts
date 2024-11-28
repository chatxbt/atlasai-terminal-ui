"use client";

import { useState } from "react";
import { generateRandomString } from "../utils";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const addMessage = (message: string, type: Message["type"]) => {
    setLoading(true);

    const newMessage = {
      id: generateRandomString(),
      message,
      type,
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate server response
    setTimeout(() => {
      setLoading(false);

      const errorMessage = {
        id: generateRandomString(),
        message:
          "⚠️ Connection to the server could not be established at the moment. Please try again later.",
        type: "system" as Message["type"],
      };

      setMessages((prev) => [...prev, errorMessage]);
    }, 3000);

    return newMessage.id;
  };

  return {
    messages,
    setMessages,
    loading,
    setLoading,
    addMessage,
  };
};
