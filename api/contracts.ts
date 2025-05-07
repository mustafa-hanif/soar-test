import { initContract } from "@ts-rest/core";
import { z } from "zod";
import {
  BalanceHistory,
  CreditCard,
  NavItem,
  ExpenseStats,
  FrequentTransfer,
  RecentTransaction,
  WeeklyActivity,
} from "./schema";

const c = initContract();

export const main = c.router(
  {
    navigation: {
      method: "GET",
      path: "/navigation",
      responses: {
        200: z.array(NavItem),
      },
    },
    balanceHistory: {
      method: "GET",
      path: "/balance",
      responses: {
        200: z.array(BalanceHistory),
      },
    },
    cards: {
      method: "GET",
      path: "/cards",
      responses: {
        200: z.array(CreditCard),
      },
    },
    transactions: {
      method: "GET",
      path: "/transactions",
      responses: {
        200: z.array(RecentTransaction),
      },
    },
    weeklyActivity: {
      method: "GET",
      path: "/weekly-activity",
      responses: {
        200: z.array(WeeklyActivity),
      },
    },
    expenseStats: {
      method: "GET",
      path: "/expense-stats",
      responses: {
        200: z.array(ExpenseStats),
      },
    },
    frequentTransfer: {
      method: "GET",
      path: "/frequent-transfers",
      responses: {
        200: z.array(FrequentTransfer),
      },
    },
  },
  {
    strictStatusCodes: true,
  }
);
