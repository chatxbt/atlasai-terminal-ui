import { useEffect, useState } from "react";

export const useTypewriter = (
  string: string = "",
  speed = 50,
  onComplete?: () => void
) => {
  const [displayString, setDisplayString] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < string.length) {
        setDisplayString(string.substr(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [speed, string]);

  return displayString;
};
