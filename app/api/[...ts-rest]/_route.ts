import { main } from "@/data/contracts";
import { createNextHandler } from "@ts-rest/serverless/next";
import navigationData from "@/data/mockData/navigation";
import balanceData from "@/data/mockData/balanceHistory";
import cards from "@/data/mockData/cards";
import weeklyActivity from "@/data/mockData/weeklyActivity";
import transactionsData from "@/data/mockData/recentTransactions";
import expenseStats from "@/data/mockData/expenseStats";
import frequentData from "@/data/mockData/frequentTransfer";

export const dynamic = "force-dynamic";

const handler = createNextHandler(
  main,
  {
    navigation: async () => {
      return {
        status: 200,
        body: navigationData,
      };
    },
    balanceHistory: async () => {
      return {
        status: 200,
        body: balanceData,
      };
    },
    cards: async () => {
      return {
        status: 200,
        body: cards,
      };
    },
    transactions: async () => {
      return {
        status: 200,
        body: transactionsData,
      };
    },
    weeklyActivity: async () => {
      return {
        status: 200,
        body: weeklyActivity,
      };
    },
    expenseStats: async () => {
      return {
        status: 200,
        body: expenseStats,
      };
    },
    frequentTransfer: async () => {
      return {
        status: 200,
        body: frequentData,
      };
    },
  },
  {
    basePath: "/api",
    jsonQuery: true,
    responseValidation: true,
    handlerType: "app-router",
  }
);

export { handler as GET };
