import { z } from "zod";
import {
  BalanceHistory,
  CreditCard,
  ExpenseStats,
  FrequentTransfer,
  NavItem,
  RecentTransaction,
  WeeklyActivity,
} from "./schema";

export type INavItem = z.infer<typeof NavItem>;
export type ICreditCard = z.infer<typeof CreditCard>;
export type IRecentTransaction = z.infer<typeof RecentTransaction>;
export type IWeeklyActivity = z.infer<typeof WeeklyActivity>;
export type IExpenseStats = z.infer<typeof ExpenseStats>;
export type IFrequentTransfer = z.infer<typeof FrequentTransfer>;
export type IBalanceHistory = z.infer<typeof BalanceHistory>;
