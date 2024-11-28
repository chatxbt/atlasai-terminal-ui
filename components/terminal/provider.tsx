"use client";
import { createContext, useContext, ReactNode } from "react";

import { useIsMounted, useMessages, useRagApp } from "@/lib/hooks";

const TerminalContext = createContext<TerminalContextType | undefined>(
  undefined
);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const { messages, loading, setLoading, setMessages, addMessage } =
    useMessages();
  const { appId, initializing } = useRagApp();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <TerminalContext.Provider
      value={{
        messages,
        addMessage,
        loading,
        setLoading,
        setMessages,
        initializing,
        appId,
      }}
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
