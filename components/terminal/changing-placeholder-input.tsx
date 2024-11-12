import Typewriter from "typewriter-effect";

import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { useInputUX } from "@/lib/hooks";
import { placeholders } from "./placeholders";
import { User } from "./user";

export function UserInput({ className }: { className?: string }) {
  const {
    states: { message, textareaRef, isFocused, messages, label },
    actions: { handleKeyDown, handleChange, handleFocus },
  } = useInputUX();

  return (
    <div className={cn("relative w-full", className)}>
      {/* Typewriter Effect for Placeholder */}
      {message.trim() === "" && !isFocused && !messages.length && (
        <div className="indent-[11.5rem] font-mono absolute inset-0 pointer-events-none text-neutral-500">
          <Typewriter
            options={{
              strings: placeholders,
              autoStart: true,
              loop: true,
              delay: 15,
              deleteSpeed: 5,
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        <User className="whitespace-nowrap bg-black w-max" />
      </div>

      <Textarea
        value={label + message}
        rows={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        className="bg-black border-none outline-none focus-visible:ring-0 ring-0 shadow-none resize-none touch-none min-h-fit overflow-y-auto leading-snug py-[2px] px-0"
        ref={textareaRef}
        enterKeyHint="send"
        spellCheck="false"
        style={{
          WebkitTextFillColor: "inherit",
        }}
      />
    </div>
  );
}
