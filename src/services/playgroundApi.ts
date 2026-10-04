import type { NetworkRequest } from "@/models/NetworkRequest";

export async function postPlaygroundRequest(request: NetworkRequest) {
  const response = await fetch("/api/playground", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Playground request failed.");
  }

  return response.json() as Promise<
    NetworkRequest & {
      status: number;
      latencyMs: number;
      receivedAt: string;
    }
  >;
}
