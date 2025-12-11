import { pgTable, text, serial, timestamp, json } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  status: text("status").notNull().default("draft"),
  tldr: text("tldr"),
  topTenItems: json("top_ten_items").$type<string[]>(),
  htmlContent: text("html_content"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  sentAt: timestamp("sent_at"),
});

export const researchSources = pgTable("research_sources", {
  id: serial("id").primaryKey(),
  newsletterId: serial("newsletter_id").references(() => newsletters.id),
  url: text("url"),
  title: text("title"),
  content: text("content"),
  summary: text("summary"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterRelations = relations(newsletters, ({ many }) => ({
  sources: many(researchSources),
}));

export const researchSourceRelations = relations(researchSources, ({ one }) => ({
  newsletter: one(newsletters, {
    fields: [researchSources.newsletterId],
    references: [newsletters.id],
  }),
}));

export type Newsletter = typeof newsletters.$inferSelect;
export type InsertNewsletter = typeof newsletters.$inferInsert;
export type ResearchSource = typeof researchSources.$inferSelect;
export type InsertResearchSource = typeof researchSources.$inferInsert;
