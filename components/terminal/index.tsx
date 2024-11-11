"use client";
import { useState, useEffect, useRef } from "react";

import { useTerminal } from "./provider";
import { Loader } from "../ui/loader";
import { UserInput } from "./changing-placeholder-input";
import { useIsMounted, useTypewriter } from "@/lib/hooks";
import { User } from "./user";

export function Terminal() {
  const { messages, loading } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);

  const isMounted = useIsMounted();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const [show, setShow] = useState(false);

  const text =
    "> AtlasAI is building the world's first AI Network Engineer.\n> We are a deeply technical team of alumni from Verizon, Nvidia, Google and Microsoft building AI agents for network operations teams.\n> Ask anything below.\n> (just type).";

  const onboardMessage = useTypewriter(text, 15, () => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  });

  if (!isMounted) return null;
  return (
    <div className="flex flex-col gap-6">
      <span className="whitespace-pre-line leading-normal block">
        {onboardMessage}
      </span>

      {show && (
        <div className="flex flex-col items-start gap-5">
          {messages.map(({ id, message, type }) => (
            <div className="flex items-center flex-nowrap" key={id}>
              {type === "user" && <User className="mr-4" />}
              {<span className="flex-1 break-all">{message}</span>}
            </div>
          ))}

          {loading ? <Loader /> : <UserInput />}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}
