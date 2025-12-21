import type { Context } from "@netlify/functions";

function getEnv(name: string): string | undefined {
  const env = (globalThis as any).Netlify?.env;
  if (!env) return undefined;
  if (typeof env.get === "function") return env.get(name) ?? undefined;
  return env[name] ?? undefined;
}

function sanitizeObject(value: unknown): unknown {
  if (!value || typeof value !== "object") return value;
  if (Array.isArray(value)) {
    const sanitized = value
      .map(sanitizeObject)
      .filter((item) => item !== null && item !== undefined);
    return sanitized;
  }

  const out: Record<string, unknown> = {};
  for (const [key, raw] of Object.entries(value as Record<string, unknown>)) {
    if (raw === null || raw === undefined) continue;

    if (Array.isArray(raw)) {
      const filtered = raw.filter(
        (item) => typeof item === "string" && item.trim().length > 0,
      );
      if (filtered.length > 0) out[key] = filtered;
      continue;
    }

    out[key] = sanitizeObject(raw);
  }

  return out;
}

function coerceNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function sanitizeEvent(event: unknown): unknown {
  if (!event || typeof event !== "object") return event;
  const obj = sanitizeObject(event) as Record<string, unknown>;

  const eventTime = coerceNumber(obj.event_time);
  if (eventTime !== undefined) obj.event_time = Math.trunc(eventTime);

  const customData = obj.custom_data;
  if (customData && typeof customData === "object") {
    const cd = customData as Record<string, unknown>;
    const value = coerceNumber(cd.value);
    if (value !== undefined) cd.value = value;
  }

  const attributionData = obj.attribution_data;
  if (attributionData && typeof attributionData === "object") {
    const ad = attributionData as Record<string, unknown>;
    const share = coerceNumber(ad.attribution_share);
    if (share !== undefined) ad.attribution_share = share;
  }

  return obj;
}

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  const accessToken = getEnv("META_ACCESS_TOKEN");
  const pixelId = getEnv("META_PIXEL_ID");
  const graphVersion = getEnv("META_GRAPH_VERSION") || "v21.0";

  if (!accessToken || !pixelId) {
    return new Response(
      JSON.stringify({
        error:
          "Server is not configured. Set META_ACCESS_TOKEN and META_PIXEL_ID.",
      }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (!body || typeof body !== "object" || !Array.isArray((body as any).data)) {
    return new Response(
      JSON.stringify({ error: "Expected a JSON body with a data[] array" }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  const incoming = body as Record<string, unknown>;
  const outgoing: Record<string, unknown> = {
    ...incoming,
    data: (incoming.data as unknown[]).map(sanitizeEvent),
  };

  const url = new URL(
    `https://graph.facebook.com/${graphVersion}/${encodeURIComponent(pixelId)}/events`,
  );
  url.searchParams.set("access_token", accessToken);

  const metaRes = await fetch(url.toString(), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(outgoing),
  });

  const contentType =
    metaRes.headers.get("content-type") || "application/json";
  const responseText = await metaRes.text();

  return new Response(responseText, {
    status: metaRes.status,
    headers: { "content-type": contentType },
  });
};
