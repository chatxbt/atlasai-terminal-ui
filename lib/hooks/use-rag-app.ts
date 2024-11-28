"use client";
import { useState, useEffect } from "react";

import { createRag } from "@/lib/api/requests";
import { generateRandomString } from "../utils";

export const useRagApp = () => {
  const [appId, setAppId] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const initializeRagApp = async () => {
      const storedAppId = localStorage.getItem("appId");

      if (!storedAppId) {
        try {
          const { data } = await createRag({
            name: `Atlas-User-${generateRandomString(3)}`,
            description: "Default RAG app for AtlasAi user.",
          });

          console.log({ data });

          localStorage.setItem("appId", data);
          setAppId(data);
        } catch (error) {
          console.error("Error Initializing Default RAG:", error);
          throw new Error("Error initializing App");
        }
      } else {
        setAppId(storedAppId);
      }

      setInitializing(false);
    };

    initializeRagApp();
  }, []);

  return {
    appId,
    initializing,
  };
};
