"use client";

import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

import { useTerminal } from "./provider";
import { Loader } from "../ui/loader";
import { UserInput } from "./changing-placeholder-input";
import { useTypewriter } from "@/lib/hooks";

export function Terminal() {
  const [input, setInput] = useState("");
  const { messages, addMessage } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    addMessage(input, "user");

    // Simulate response (replace with actual API call)
    const responseId = addMessage("Processing your request...", "system");
    setInput("");

    // Simulate API delay
    setTimeout(() => {
      const updatedMessages = messages.map((msg) =>
        msg.id === responseId
          ? { ...msg, content: `Response to: ${input}`, loading: false }
          : msg
      );
      // Update messages
      messages.splice(0, messages.length, ...updatedMessages);
    }, 2000);
  };

  const [show, setShow] = useState(false);

  const text =
    "> Supertrace is building the world's first AI Network Engineer.\n> We are a deeply technical team of alumni from Verizon, Nvidia, Google and Microsoft building AI agents for network operations teams.\n> Ask anything below.\n> (just type).";

  const onboardMessage = useTypewriter(text, 15, () => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  });

  return (
    <div className="flex flex-col">
      <span className="whitespace-pre-line leading-normal block">
        {onboardMessage}
      </span>

      {/* <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="text-green-500">
                {message.type === "system" && "> "}
                {message.type === "user" && "user@terminal: ~ $ "}
                {message.type === "response" && "terminal@response: ~ $ "}
              </div>
              <div className="flex-1 break-all">
                {message.loading ? <Loader /> : <span>{message.content}</span>}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div> */}

      {show && (
        <div className="mt-5">
          <UserInput />
        </div>
      )}
    </div>
  );
}
