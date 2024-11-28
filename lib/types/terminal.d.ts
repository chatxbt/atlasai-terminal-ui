type Message = {
  id: string;
  message: string;
  type: "system" | "user";
};

interface TerminalContextType {
  messages: Message[];
  loading: boolean;
  appId: string | null;
  initializing: boolean;
  addMessage: (message: string, type: Message["type"]) => string;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
