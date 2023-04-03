const Redis = require("ioredis");

const redisClient = new Redis(process.env.REDIS_HOST);

redisClient.on("connect", () => {
  console.log("Redis client connected successfully!!!");
});

redisClient.on("error", (err: any) => {
  console.error("Redis client failed to connect:", err);
});

module.exports = redisClient;
