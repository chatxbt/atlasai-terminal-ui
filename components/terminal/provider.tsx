"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Message = {
  id: string;
  message: string;
  type: "system" | "user";
};

interface TerminalContextType {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  loading?: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  addMessage: (message: string, type: Message["type"]) => string;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const addMessage = (message: string, type: Message["type"]) => {
    setLoading(true);

    const newMessage = {
      id: Math.random().toString(36).substring(7),
      message,
      type,
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setLoading(false);

      const newMessage = {
        id: Math.random().toString(36).substring(7),
        message:
          "⚠️ Connection to the server could not be established at the moment. Please try again later.",
        type: "system" as Message["type"],
      };

      setMessages((prev) => [...prev, newMessage]);
    }, 3000);

    return newMessage.id;
  };

  return (
    <TerminalContext.Provider
      value={{ messages, addMessage, loading, setLoading, setMessages }}
    >
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
