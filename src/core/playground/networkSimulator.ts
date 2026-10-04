import type { NetworkRequest } from "@/models/NetworkRequest";

export function simulateNetworkRequest(request: NetworkRequest) {
  return {
    ...request,
    status: 200,
    latencyMs: 64,
    receivedAt: new Date().toISOString(),
  };
}
