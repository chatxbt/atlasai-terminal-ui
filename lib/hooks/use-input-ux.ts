import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { useTerminal } from "@/components/terminal/provider";
import { user } from "../constants";

export const useInputUX = () => {
  const { messages, addMessage, setMessages } = useTerminal();

  const [isFocused, setIsFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const label = `${user.username}@${user.domain}: ~ $  `;

  const formRef = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [message, setMessage] = useState("");

  const isDirty = !!message || !!messages.length;

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (!message.trim()) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            message: "",
            type: "user",
          },
        ]);
        if (textareaRef.current) {
          textareaRef.current.value = label;
        }
        return;
      }

      handleSubmit();
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === "a") {
      e.preventDefault();
      const start = label.length;
      if (textareaRef.current) {
        textareaRef.current.setSelectionRange(
          start,
          textareaRef.current.value.length
        );
      }
    }

    if (
      (e.key === "Delete" || e.key === "Backspace") &&
      textareaRef.current?.selectionStart === label.length &&
      textareaRef.current?.selectionEnd === label.length
    ) {
      e.preventDefault();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (!value.startsWith(label)) {
      e.target.value = label + message;
      return;
    }
    setMessage(value.slice(label.length));

    if (textareaRef.current) {
      const message = textareaRef.current;
      message.style.height = "auto";
      message.style.height = message.scrollHeight + "px";
    }
  };

  const handleFocus = () => {
    const current = textareaRef.current;
    if (current) {
      current.setSelectionRange(current.value.length, current.value.length);
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

    if (message.trim().toLowerCase() === "clear") {
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

  // This effect is used to trigger a dialogue for confirmation before a user reloads or closes the page. This is important since conversations are not persisted and will be lost on reloads.
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = ""; // Necessary for showing the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return {
    states: {
      textareaRef,
      formRef,
      buttonRef,
      message,
      isDisabled,
      isFocused,
      messages,
      label,
    },
    actions: {
      handleChange,
      handleKeyDown,
      handleSubmit,
      setMessage,
      handleFocus,
    },
  };
};
