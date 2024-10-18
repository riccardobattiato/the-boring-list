import { integer, pgTable, varchar, text, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const tasks = pgTable("tasks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  completed: boolean().default(false).notNull(),
});

// Schema for inserting a user - can be used to validate API requests
const insertTaskSchema = createInsertSchema(tasks);
// Schema for selecting a user - can be used to validate API responses
const selectTaskSchema = createSelectSchema(tasks);
