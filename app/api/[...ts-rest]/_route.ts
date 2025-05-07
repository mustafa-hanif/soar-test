import { main } from "@/api/contracts";
import { createNextHandler } from "@ts-rest/serverless/next";
import navigationData from "@/api/mockData/navigation";
import balanceData from "@/api/mockData/balanceHistory";
import cards from "@/api/mockData/cards";
import weeklyActivity from "@/api/mockData/weeklyActivity";
import transactionsData from "@/api/mockData/recentTransactions";
import expenseStats from "@/api/mockData/expenseStats";
import frequentData from "@/api/mockData/frequentTransfer";

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
