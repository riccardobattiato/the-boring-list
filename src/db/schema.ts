import { integer, pgTable, varchar, text, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("tasks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  completed: boolean().default(false).notNull(),
});
