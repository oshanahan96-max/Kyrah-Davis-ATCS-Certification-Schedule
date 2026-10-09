import { getStore } from "@netlify/blobs";

export default async (req) => {
  const url = new URL(req.url);
  const who = (url.searchParams.get("who") || "default").slice(0, 80);
  const store = getStore("certification-progress");

  if (req.method === "GET") {
    const data = await store.get(who, { type: "json" });
    return Response.json(data || { done: {} });
  }
  if (req.method === "POST") {
    const body = await req.json().catch(() => null);
    if (!body || typeof body.done !== "object") return new Response("Bad request", { status: 400 });
    const record = { done: body.done, updated: new Date().toISOString() };
    await store.setJSON(who, record);
    return Response.json(record);
  }
  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/progress" };
