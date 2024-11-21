"use client";
import { useState, useEffect, useRef } from "react";

import { useTerminal } from "./provider";
import { Loader } from "../ui/loader";
import { UserInput } from "./changing-placeholder-input";
import { useTypewriter } from "@/lib/hooks";
import { User } from "./user";
import { asciiArt } from "@/lib/constants";

export function Terminal() {
  const { messages, loading } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const [show, setShow] = useState(false);

  const text =
    "> <span class='text-black py-1 px-2 rounded-md bg-neutral-200 shadow-lg font-bold'>Atlas</span> is your shell to the  <a href='https://atlasai.io' class='underline text-blue-500'>ChatXBT Protocol</a> ecosystem \n \n> Turn your crypto documentation into powerful interactive tools. Customize, extend, and monetize your knowledge base with AI-powered experiences <a href='https://app.deform.cc/form/6539b0d1-be4c-4c7d-844d-3201c16bf02a' class='underline text-green-500'>Launch Your Shell</a> \n\n> Ask anything below.\n> (just type).";

  const onboardMessage = useTypewriter(text, 15, () => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  });

  useEffect(() => {
    const handleAnywhereClick = () => {
      const textarea = terminalRef.current?.querySelector("textarea");
      if (textarea) {
        textarea.focus();
      }
    };

    const handleAnywherePress = (e: KeyboardEvent) => {
      const textarea = terminalRef.current?.querySelector("textarea");
      if (textarea && e.target === document.body) {
        textarea.focus();
        if (e.key.length === 1) {
          textarea.value += e.key;
          const event = new Event("input", { bubbles: true });
          textarea.dispatchEvent(event);
        }
      }
    };

    document.addEventListener("click", handleAnywhereClick);
    document.addEventListener("keypress", handleAnywherePress);

    return () => {
      document.removeEventListener("click", handleAnywhereClick);
      document.removeEventListener("keypress", handleAnywherePress);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10" ref={terminalRef}>
      <pre className="font-mono text-[0.4rem] sm:text-sm md:text-base whitespace-pre leading-none mb-4 text-orange-500 overflow-x-auto">
        {asciiArt}
      </pre>

      <span
        className="whitespace-pre-line leading-normal block sm:text-sm md:text-base font-mono font-medium"
        dangerouslySetInnerHTML={{ __html: onboardMessage }}
      />

      {show && (
        <div className="flex flex-col items-start gap-5">
          {messages.map(({ id, message, type }) => (
            <div className="flex items-center flex-nowrap" key={id}>
              {type === "user" && <User className="mr-2" />}
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
