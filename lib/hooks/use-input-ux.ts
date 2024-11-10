import { useTerminal } from "@/components/terminal/provider";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export const useInputUX = () => {
  const { messages, addMessage, setMessages } = useTerminal();

  const [isFocused, setIsFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    if (textareaRef.current) {
      const message = textareaRef.current;
      message.style.height = "auto";
      message.style.height = message.scrollHeight + "px";
    }
  };

  //====================FORM SUBMISSION HANDLER====================
  const isDisabled = !message.trim();

  const handleSubmit = async () => {
    if (textareaRef.current) {
      const message = textareaRef.current;
      message.value = "";
      message.style.height = "auto";
    }

    if (message.trim() === "clear") {
      setMessages([]);
    } else {
      // Add user message
      addMessage(message, "user");
    }

    setMessage("");
  };

  //====================EFFECTS====================
  useEffect(() => {
    if (message === "" && textareaRef.current) {
      const message = textareaRef.current;
      message.style.height = "auto";
    }
  }, [message]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      const handleFocus = () => setIsFocused(true);
      const handleBlur = () => setIsFocused(false);

      // Add event listeners to detect focus and blur on the input
      const input = textareaRef.current;
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);

      // Cleanup event listeners when the component is unmounted
      return () => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      };
    }
  }, [textareaRef]);

  return {
    states: {
      textareaRef,
      formRef,
      buttonRef,
      message,
      isDisabled,
      bottomRef,
      isFocused,
      messages,
    },
    actions: {
      handleChange,
      handleKeyDown,
      handleSubmit,
      setMessage,
    },
  };
};
