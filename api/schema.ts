import { z } from "zod";

export const NavItem = z.object({
  name: z.string(),
  icon: z.string(),
  href: z.string().optional(),
  enabled: z.boolean().optional(),
});

export const CreditCard = z.object({
  balance: z.number(),
  cardHolder: z.string(),
  valid: z.string(),
  cardNumber: z.string(),
  type: z.string(),
  color: z.string(),
});

export const RecentTransaction = z.object({
  title: z.string(),
  date: z.string(),
  amount: z.number(),
  icon: z.string(),
});

export const WeeklyActivity = z.object({
  day: z.string(),
  deposit: z.string(),
  withdraw: z.string(),
});

export const ExpenseStats = z.object({
  type: z.string(),
  percent: z.number(),
});

export const FrequentTransfer = z.object({
  name: z.string(),
  position: z.string(),
  imageUrl: z.string(),
});

export const BalanceHistory = z.object({
  month: z.string(),
  balance: z.number(),
});
