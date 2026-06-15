const LIKES_KEY = "portfolio_ias_video_likes";

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return { url, token };
}

function sendJson(res, status, data) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
  res.status(status).json(data);
}

async function redisCommand(command) {
  const { url, token } = getRedisConfig();
  if (!url || !token) {
    const error = new Error("Likes storage is not configured.");
    error.statusCode = 503;
    throw error;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) {
    const error = new Error("Likes storage request failed.");
    error.statusCode = 502;
    throw error;
  }

  const data = await response.json();
  return data.result;
}

function normalizeId(id) {
  if (typeof id !== "string") return "";
  const trimmed = id.trim();
  if (!trimmed.startsWith("./output/") || trimmed.length > 220) return "";
  return trimmed;
}

function getBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "object") return req.body;

  try {
    return JSON.parse(req.body.toString());
  } catch {
    return {};
  }
}

function formatLikes(rawLikes) {
  if (!Array.isArray(rawLikes)) return {};

  const likes = {};
  for (let index = 0; index < rawLikes.length; index += 2) {
    const id = rawLikes[index];
    const count = Number(rawLikes[index + 1]);
    if (typeof id === "string" && Number.isFinite(count)) {
      likes[id] = count;
    }
  }

  return likes;
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return sendJson(res, 204, {});
  }

  try {
    if (req.method === "GET") {
      const rawLikes = await redisCommand(["HGETALL", LIKES_KEY]);
      return sendJson(res, 200, { likes: formatLikes(rawLikes) });
    }

    if (req.method === "POST") {
      const body = getBody(req);
      const id = normalizeId(body.id);
      if (!id) {
        return sendJson(res, 400, { error: "Invalid video id." });
      }

      const count = Number(await redisCommand(["HINCRBY", LIKES_KEY, id, 1]));
      return sendJson(res, 200, { id, count });
    }

    return sendJson(res, 405, { error: "Method not allowed." });
  } catch (error) {
    return sendJson(res, error.statusCode || 500, {
      error: error.message || "Likes request failed.",
    });
  }
};
