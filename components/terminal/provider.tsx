"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Message = {
  id: string;
  message: string;
  type: "system" | "user";
  loading?: boolean;
};

interface TerminalContextType {
  messages: Message[];
  addMessage: (message: string, type: Message["type"]) => string;
  setLoading: (id: string, loading: boolean) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", message: "Welcome to Terminal Chat UI", type: "system" },
    {
      id: "2",
      message: "Type your message below and press Enter.",
      type: "system",
    },
  ]);

  const addMessage = (message: string, type: Message["type"]) => {
    const newMessage = {
      id: Math.random().toString(36).substring(7),
      message,
      type,
      loading: type === "user",
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage.id;
  };

  const setLoading = (id: string, loading: boolean) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, loading } : msg))
    );
  };

  return (
    <TerminalContext.Provider value={{ messages, addMessage, setLoading }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
}
