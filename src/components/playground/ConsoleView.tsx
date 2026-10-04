"use client";

import { usePlaygroundConsole } from "@/hooks/usePlaygroundConsole";

export function ConsoleView() {
  const { logs, sendTestRequest, isLoading } = usePlaygroundConsole();

  return (
    <section className="space-y-4">
      <button
        type="button"
        onClick={sendTestRequest}
        className="rounded-md bg-foreground px-4 py-2 text-background"
      >
        Ejecutar request
      </button>
      <pre className="min-h-80 overflow-auto rounded-md border border-border bg-surface p-4 text-sm">
        {isLoading ? "Ejecutando..." : logs.join("\n")}
      </pre>
    </section>
  );
}
