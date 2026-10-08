import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = { name: "Alex Smith", phone: "(313) 555-0123", email: "alex@example.com", message: "Care inquiry", org: "" };
describe("Contact inquiry validation", () => {
  it("accepts a complete inquiry", () => expect(contactSchema.safeParse(valid).success).toBe(true));
  it("rejects invalid phone characters", () => expect(contactSchema.safeParse({ ...valid, phone: "3135550123<script>" }).success).toBe(false));
  it("rejects an invalid email", () => expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false));
  it("rejects messages exceeding the field limit", () => expect(contactSchema.safeParse({ ...valid, message: "a".repeat(1001) }).success).toBe(false));
});