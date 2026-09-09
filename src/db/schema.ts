import {
  pgTable,
  pgEnum,
  serial,
  varchar,
  text,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const inquiryType = pgEnum("inquiry_type", ["inquiry", "reservation"]);

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  type: inquiryType("type").notNull().default("inquiry"),
  name: varchar("name", { length: 120 }).notNull(),
  contact: varchar("contact", { length: 160 }).notNull(),
  date: varchar("date", { length: 20 }),
  time: varchar("time", { length: 10 }),
  guests: integer("guests"),
  message: text("message"),
  lang: varchar("lang", { length: 5 }).default("sr"),
  delivery: varchar("delivery", { length: 20 }).default("stored"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
