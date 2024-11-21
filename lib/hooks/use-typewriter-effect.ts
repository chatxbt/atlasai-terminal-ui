import { useEffect, useState } from "react";

export const useTypewriter = (
  string: string = "",
  speed = 5,
  onComplete?: () => void
) => {
  const [displayString, setDisplayString] = useState("");

  useEffect(() => {
    let i = 0;
    const charactersPerTick = 4;

    const typingInterval = setInterval(() => {
      if (i < string.length) {
        setDisplayString(string.substr(0, i + charactersPerTick));
        i += charactersPerTick;
      } else {
        clearInterval(typingInterval);
        setDisplayString(string);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, string]);

  return displayString;
};
