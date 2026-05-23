import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: "localhost",
  user: "lifearchitect_user",
  password: "Welcome@2026",
  database: "lifearchitectsarika_db",
});

export const prisma = new PrismaClient({
  adapter,
});