import Redis from "ioredis";

const redisUrl: string = process.env.REDIS_URL!;

export const redis = new Redis(redisUrl, { lazyConnect: true });
redis.on("error", (err) => {
  console.error("Redis error:", err);
});
