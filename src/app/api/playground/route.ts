import { NextResponse } from "next/server";
import { simulateNetworkRequest } from "@/core/playground/networkSimulator";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const response = simulateNetworkRequest({
    method: body.method ?? "GET",
    url: body.url ?? "https://example.com/api",
  });

  return NextResponse.json(response);
}
