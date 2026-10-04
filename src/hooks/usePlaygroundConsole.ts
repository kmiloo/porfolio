"use client";

import { useCallback, useState } from "react";
import { postPlaygroundRequest } from "@/services/playgroundApi";

export function usePlaygroundConsole() {
  const [logs, setLogs] = useState<string[]>(["Consola lista."]);
  const [isLoading, setIsLoading] = useState(false);

  const sendTestRequest = useCallback(async () => {
    setIsLoading(true);
    const response = await postPlaygroundRequest({
      method: "GET",
      url: "https://example.com/api/health",
    });
    setLogs((currentLogs) => [
      ...currentLogs,
      `${response.status} ${response.method} ${response.url} ${response.latencyMs}ms`,
    ]);
    setIsLoading(false);
  }, []);

  return {
    logs,
    isLoading,
    sendTestRequest,
  };
}
