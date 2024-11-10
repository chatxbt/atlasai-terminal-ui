import Typewriter from "typewriter-effect";

import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { useInputUX } from "@/lib/hooks";
import { placeholders } from "./placeholders";
import { User } from "./user";

export function UserInput({ className }: { className?: string }) {
  const {
    states: { message, textareaRef, isFocused },
    actions: { handleKeyDown, handleChange },
  } = useInputUX();

  return (
    <div className={cn("relative w-full h-full", className)}>
      <Textarea
        value={message}
        rows={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none focus-visible:ring-0 ring-0 shadow-none resize-none touch-none min-h-fit overflow-y-auto leading-snug indent-44 py-[2px] px-0"
        ref={textareaRef}
        enterKeyHint="send"
        spellCheck="false"
      />
      <User className="absolute left-0 top-0" />

      {/* Typewriter Effect for Placeholder */}
      {message.trim() === "" && !isFocused && (
        <span className="pointer-events-none flex space-x-1 font-mono absolute indent-44 left-0 top-0 text-neutral-500 w-full whitespace-pre-line">
          <Typewriter
            options={{
              strings: placeholders,
              autoStart: true,
              loop: true,
              delay: 15,
              deleteSpeed: 5,
            }}
          />
        </span>
      )}
    </div>
  );
}
