
// prisma.config.ts

export default {
  client: {
    provider: "prisma-client-js",
    output: "./lib/generated/prisma", // Your preferred output directory
  },
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Environment variable for your database URL
    },
  },
} as const;
